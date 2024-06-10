var ldap = require("ldapjs");

const { LDAP_HOST, LDAP_PORT, LDAP_USERNAME, LDAP_PASSWORD } = process.env;

const attributes = [
  "distinguishedName",
  "cn",
  "sAMAccountName",
  "mail",
  "whenCreated",
  "whenChanged",
  "lastLogon",
];

function convertADDatetime(ldapTime) {
  let year = parseInt(ldapTime.slice(0, 4), 10);
  let month = parseInt(ldapTime.slice(4, 6), 10) - 1;
  let day = parseInt(ldapTime.slice(6, 8), 10);
  let hour = parseInt(ldapTime.slice(8, 10), 10);
  let minute = parseInt(ldapTime.slice(10, 12), 10);
  let second = parseInt(ldapTime.slice(12, 14), 10);

  let date = new Date(Date.UTC(year, month, day, hour, minute, second));

  return date;
}

function formatEntryResult(entry) {
  let ldapUser = {};

  entry.pojo.attributes.map(({ type, values }) => {
    ldapUser[type] = values[0];
    // console.log(type, values[0]);
  });

  const user = {
    distinguishedName: ldapUser.distinguishedName,
    firstName: ldapUser.cn.split(" ")[0],
    lastName: ldapUser.cn.split(" ")[1],
    fullName: ldapUser.cn,
    username: ldapUser.sAMAccountName,
    mail: ldapUser.mail,
    date_created: convertADDatetime(ldapUser.whenCreated),
    date_updated: convertADDatetime(ldapUser.whenChanged),
  };

  return user;
}

function createLdapClient() {
  const client = ldap.createClient({ url: `ldap://${LDAP_HOST}:${LDAP_PORT}` });

  return new Promise((resolve, reject) => {
    client.bind(LDAP_USERNAME, LDAP_PASSWORD, (err) => {
      if (err) reject(err);
      else resolve(client);
    });
  });
}

async function getUsers(search, options) {
  const client = await createLdapClient();

  return new Promise((resolve, reject) => {
    client.search(search, options, (err, searchRes) => {
      if (err) reject("Search error");

      const users = [];

      searchRes.on("searchEntry", (entry) => {
        const user = formatEntryResult(entry);

        user.moderator = search == process.env.LDAP_ADMINS

        if (user) users.push(user);
      });

      searchRes.on("error", (err) => {
        reject(err);

        client.unbind((err) => {
          if (err) console.error("Error in unbinding: ", err);
        });
      });

      searchRes.on("end", () => {
        resolve(users);

        client.unbind((err) => {
          if (err) console.error("Error in unbinding: ", err);
        });
      });
    });
  });
}

module.exports = {
  attributes,
  formatEntryResult,
  createLdapClient,
  getUsers,
  convertADDatetime,
};
