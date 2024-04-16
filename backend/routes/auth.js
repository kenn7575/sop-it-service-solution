const express = require("express");
const router = express.Router();
const { ldapAuthenticate } = require("../functions/auth");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { username, password: userPassword } = req.body;

  if (!username || !userPassword)
    return res.json({ error: "Missing credentials" });

  try {
    let user = await ldapAuthenticate(username, userPassword);

    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.json(user);
  } catch (err) {
    console.log(err);
    res.json({ error: "Something went wrong" });
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
});

router.get("/cookies", (req, res) => {
  res.json(req.cookies);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

module.exports = router;
