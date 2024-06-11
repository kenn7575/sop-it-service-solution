import { Router } from "express";
import { attributes, getUsers } from "@functions";
import { SearchOptions } from "ldapjs";

const router = Router();

const { LDAP_USERS, LDAP_ADMINS } = process.env;

const headers = [
  "firstName",
  "lastName",
  "fullName",
  "username",
  "mail",
  "date_created",
  "date_updated",
];

router.get("/ldap", async (req, res) => {
  try {
    const searchOptions = {
      filter: "(objectClass=person)",
      scope: "sub",
      attributes,
    } as SearchOptions;

    if (!LDAP_USERS || !LDAP_ADMINS)
      return res.status(500).json({ error: "LDAP credentials missing" });

    const users = await getUsers(LDAP_USERS, searchOptions);
    const admins = await getUsers(LDAP_ADMINS, searchOptions);

    res.json({ headers, data: [...users, ...admins] });
  } catch (error) {
    console.error("Error in LDAP client creation or binding:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
