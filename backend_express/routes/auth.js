const express = require("express");
const router = express.Router();
const { authenticate } = require("ldap-authentication");

let options = {
  ldapOpts: {
    url: `ldap://${process.env.LDAP_HOST}:${process.env.LDAP_PORT}`,
    // tlsOptions: { rejectUnauthorized: false }
  },
  adminDn: process.env.LDAP_USERNAME,
  adminPassword: process.env.LDAP_PASSWORD,
  userSearchBase: `${process.env.LDAP_USERS}`,
  usernameAttribute: "samaccountname",
  // starttls: false
};

router.post("/login", async (req, res) => {
  const { username, password: userPassword } = req.body;

  if (!username || !userPassword)
    return res.json({ error: "Missing credentials" });

  if (["test123t", "kenn4747"].includes(username)) {
    // find the user from the AD and return it
    let admin = await authenticate(options);

    return res.json({ error: "Test user" });
  }

  try {
    let user = await authenticate({ ...options, username, userPassword });
    res.json(user);
  } catch (err) {
    if (err?.admin?.lde_message) {
      console.log("Invalid admin credentials");
      res.json({ error: "Invalid admin credentials" });
    } else if (err?.lde_message) {
      console.log("Invalid credentials");
      res.json({ error: "Invalid credentials" });
    } else if (err?.name == "LdapAuthenticationError") {
      console.log("User not found");
      res.json({ error: "User not found" });
    } else {
      console.log(err);
      res.json({ error: "Something went wrong" });
    }
  }
});

module.exports = router;
