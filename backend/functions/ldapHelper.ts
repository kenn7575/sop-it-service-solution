import { users } from "@prisma/client";
import { Client, SearchEntry, SearchOptions, createClient } from "ldapjs";
import dotenv from "dotenv";

dotenv.config();

const { LDAP_HOST, LDAP_PORT, LDAP_USERNAME, LDAP_PASSWORD, NODE_ENV } =
  process.env;

export const attributes = [
  "distinguishedName",
  "cn",
  "sAMAccountName",
  "mail",
  "whenCreated",
  "whenChanged",
  "lastLogon",
  "memberOf",
];

export function convertADDatetime(ldapTime: string) {
  let year = parseInt(ldapTime.slice(0, 4), 10);
  let month = parseInt(ldapTime.slice(4, 6), 10) - 1;
  let day = parseInt(ldapTime.slice(6, 8), 10);
  let hour = parseInt(ldapTime.slice(8, 10), 10);
  let minute = parseInt(ldapTime.slice(10, 12), 10);
  let second = parseInt(ldapTime.slice(12, 14), 10);

  let date = new Date(Date.UTC(year, month, day, hour, minute, second));

  return date;
}

export function formatEntryResult(entry: SearchEntry): user {
  let ldapUser = {} as any;

  entry.pojo.attributes.map(({ type, values }) => {
    if (type === "memberOf") ldapUser[type] = values;
    else ldapUser[type] = values[0];
  });

  const user: user = {
    distinguishedName: ldapUser.distinguishedName,
    firstName: ldapUser.cn.split(" ")[0],
    lastName: ldapUser.cn.split(" ")[1],
    fullName: ldapUser.cn,
    username: ldapUser.sAMAccountName,
    mail: ldapUser.mail,
    memberOf: ldapUser.memberOf,
    date_created: convertADDatetime(ldapUser.whenCreated),
    date_updated: convertADDatetime(ldapUser.whenChanged),
    moderatorLevel: 0,
  };

  return user;
}

export function createLdapClient(): Promise<Client> {
  let resolve: any, reject: any;

  const promise = new Promise<Client>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  const client = createClient({ url: `ldap://${LDAP_HOST}:${LDAP_PORT}` });

  if (!LDAP_USERNAME || !LDAP_PASSWORD)
    return reject("LDAP credentials missing");

  client.bind(LDAP_USERNAME, LDAP_PASSWORD, (err) => {
    if (err) reject(err);
    else resolve(client);
  });

  return promise;
}

export async function getUsers(search: string, options: SearchOptions) {
  // let resolve: any, reject: any;

  // const promise = new Promise<users[] | any[]>((res, rej) => {
  //   resolve = res;
  //   reject = rej;
  // });

  // if (NODE_ENV === "development") return [];

  const client = await createLdapClient();

  return new Promise<users[] | any[]>((resolve, reject) => {
    client.search(search, options, (err, searchRes) => {
      if (err) reject("Search error");

      const users = [] as any[];

      searchRes.on("searchEntry", (entry) => {
        const user = formatEntryResult(entry);

        if (search == process.env.LDAP_ADMINS) user.moderatorLevel = 1;
        
        if (user.memberOf?.includes(process.env.LDAP_SUPERIORS || "")) {
          user.moderatorLevel = 2;
        }

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
