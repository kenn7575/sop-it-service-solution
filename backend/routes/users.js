const express = require("express");
const router = express.Router();
const { attributes, getUsers } = require("../functions/auth");

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
    };

    const users = await getUsers(LDAP_USERS, searchOptions);
    const admins = await getUsers(LDAP_ADMINS, searchOptions);

    res.json({ headers, data: [...users, ...admins] });
  } catch (error) {
    console.error("Error in LDAP client creation or binding:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
