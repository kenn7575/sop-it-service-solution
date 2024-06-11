import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { SearchOptions } from "ldapjs";
import { attributes, createLdapClient, formatEntryResult } from "./ldapHelper";
import dotenv from "dotenv";

import type { users } from "@prisma/client";

dotenv.config();

const { JWT_SECRET, NODE_ENV, LDAP_USERS, LDAP_ADMINS } = process.env;

export function authenticateUser(
  req: Request & { user: any },
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Access denied" });

  if (!JWT_SECRET) throw new Error("JWT_SECRET not set");

  try {
    const verified = verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err: any) {
    if (err.name === "TokenExpiredError")
      return res.status(401).json({ error: "Token expired" });

    return res.status(400).json({ error: "Invalid token" });
  }
}

// ** Replace with global interface
export async function ldapAuthenticate(
  username: any,
  password: any,
  searchBase = LDAP_ADMINS
): Promise<(users & { moderator: boolean }) | null> {
  let resolve: any, reject: any;

  const promise = new Promise<(users & { moderator: boolean }) | null>(
    (res, rej) => {
      resolve = res;
      reject = rej;
    }
  );

  console.log(username, password, searchBase);

  if (!searchBase) return reject(promise);

  if (NODE_ENV === "developmentt") {
    return resolve({
      name: "John Doe",
      username: "jdoe",
      mail: "johndoe@mail.com",
      moderator: true,
    }) as users & { moderator: boolean };
  }

  const client = await createLdapClient();

  const searchOptions = {
    filter: `(sAMAccountName=${username.replace("@edu.sde.dk", "")})`,
    scope: "sub",
    attributes,
  } as SearchOptions;

  client.search(searchBase, searchOptions, (err, res) => {
    if (err) {
      client.unbind();
      reject("Search failed: " + err);
      return promise;
    }

    let user = {} as any;

    res.on("searchEntry", (entry) => {
      user = formatEntryResult(entry);

      user.moderator = searchBase === LDAP_ADMINS;
    });

    res.on("end", (result) => {
      if (result?.status !== 0) {
        client.unbind();
        reject("Non-zero status from LDAP search: " + result?.status);
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
