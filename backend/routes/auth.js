const express = require("express");
const router = express.Router();
const { authenticate } = require("ldap-authentication");
const jwt = require("jsonwebtoken");

const userSearchBase =
  process.env.NODE_ENV == "development"
    ? process.env.LDAP_USERS
    : process.env.LDAP_ADMINS;

let options = {
  ldapOpts: {
    url: `ldap://${process.env.LDAP_HOST}:${process.env.LDAP_PORT}`,
  },
  adminDn: process.env.LDAP_USERNAME,
  adminPassword: process.env.LDAP_PASSWORD,
  userSearchBase,
  usernameAttribute: "samaccountname",
  attributes: ["sn", "givenName", "Name", "sAMAccountName", "mail"],
};

router.post("/login", async (req, res) => {
  const { username, password: userPassword } = req.body;

  if (process.env.NODE_ENV == "development") {
    const user = {
      UUID: 792,
      username: "dev",
      name: "Dev",
      mail: "dev@dev.com",
    };

    const token = jwt.sign(user, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    return res.json(user);
  }

  if (!username || !userPassword)
    return res.json({ error: "Missing credentials" });

  try {
    let ADUser = await authenticate({ ...options, username, userPassword });

    const user = {
      username: ADUser.sAMAccountName,
      name: ADUser.name,
      mail: ADUser.mail,
    };

    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    console.log(token);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

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

router.post("/validate", async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ error: "Validation failed" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.json(verified);
    // res.end();
  } catch (err) {
    res.clearCookie("token");
    if (err.name === "TokenExpiredError")
      return res.status(401).json({ error: "Token expired" });

    return res.status(400).json({ error: "Invalid token" });
  }
});

router.post("/validate_password", async (req, res) => {
  console.log(req.body);
})

router.get("/cookies", (req, res) => {
  res.json(req.cookies);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

module.exports = router;
