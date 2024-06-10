var jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

function authenticateUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError")
      return res.status(401).json({ error: "Token expired" });

    return res.status(400).json({ error: "Invalid token" });
  }
}

const { NODE_ENV, LDAP_USERS, LDAP_ADMINS } = process.env;
const {
  attributes,
  createLdapClient,
  formatEntryResult,
  getUsers,
} = require("./ldapHelper");

async function ldapAuthenticate(username, password, searchBase = LDAP_ADMINS) {
  let resolve, reject;

  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  if (NODE_ENV === "developmentt") {
    return {
      name: "John Doe",
      username: "jdoe",
      mail: "johndoe@mail.com",
      moderator: true,
    };
  }

  const client = await createLdapClient();

  const searchOptions = {
    filter: `(sAMAccountName=${username.replace("@edu.sde.dk", "")})`,
    scope: "sub",
    attributes,
  };

  client.search(searchBase, searchOptions, (err, res) => {
    if (err) {
      client.unbind();
      reject("Search failed: " + err);
      return promise;
    }

    let user;

    res.on("searchEntry", (entry) => {
      user = formatEntryResult(entry);

      user.moderator = searchBase === LDAP_ADMINS;
    });

    res.on("end", (result) => {
      if (result.status !== 0) {
        client.unbind();
        reject("Non-zero status from LDAP search: " + result.status);
        return promise;
      }

      if (!user?.distinguishedName) {
        if (searchBase == LDAP_ADMINS)
          ldapAuthenticate(username, password, LDAP_USERS).catch(reject);
        client.unbind();
        reject("User DN not found: " + username);
        return promise;
      }

      client.bind(user.distinguishedName, password, (err) => {
        client.unbind();
        if (err) reject("User bind failed: " + username);

        resolve(user);
      });
    });
  });

  return promise;
}

module.exports = {
  authenticateUser,
  ldapAuthenticate,
  createLdapClient,
  attributes,
  formatEntryResult,
  getUsers,
};
