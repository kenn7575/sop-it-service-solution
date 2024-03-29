var jwt = require("jsonwebtoken");
var ldap = require("ldapjs");

function authenticateUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError")
      return res.status(401).json({ error: "Token expired" });

    return res.status(400).json({ error: "Invalid token" });
  }
}

async function ldapAuthenticate(username, userPassword) {
  const userSearchBase =
    process.env.NODE_ENV == "development"
      ? process.env.LDAP_USERS
      : process.env.LDAP_ADMINS;

  const ldapUrl = `ldap://${process.env.LDAP_HOST}:${process.env.LDAP_PORT}`;
  const adminDn = process.env.LDAP_USERNAME;
  const adminPassword = process.env.LDAP_PASSWORD;
  const usernameAttribute = "sAMAccountName";

  const client = ldap.createClient({
    url: ldapUrl,
  });

  return new Promise((resolve, reject) => {
    client.bind(adminDn, adminPassword, (err) => {
      if (err) {
        client.unbind();
        reject("Admin bind failed: " + err);
        return;
      }

      const searchOptions = {
        filter: `(${usernameAttribute}=${username})`,
        scope: "sub",
        attributes: [
          "cn",
          "sn",
          "givenName",
          "distinguishedName",
          "name",
          "sAMAccountName",
          "mail",
        ],
      };

      client.search(userSearchBase, searchOptions, (err, res) => {
        if (err) {
          client.unbind();
          reject("Search failed: " + err);
          return;
        }

        let user;

        res.on("searchEntry", (entry) => {
          const [
            cn,
            sn,
            givenName,
            distinguishedName,
            name,
            sAMAccountName,
            mail,
          ] = entry.pojo.attributes.map(({ type, values }) => values[0]);

          user = {
            cn,
            sn,
            givenName,
            distinguishedName,
            name,
            username: sAMAccountName,
            mail,
          };
        });

        res.on("end", (result) => {
          if (result.status !== 0) {
            client.unbind();
            reject("Non-zero status from LDAP search: " + result.status);
            return;
          }

          if (!user?.distinguishedName) {
            client.unbind();
            reject("User DN not found: " + username);
            return;
          }

          client.bind(user.distinguishedName, userPassword, (err) => {
            client.unbind();
            if (err) reject("User bind failed: " + username);

            resolve(user);
          });
        });
      });
    });
  });
}

module.exports = { authenticateUser, ldapAuthenticate };
