const express = require("express");
const router = express.Router();
const ldap = require("ldapjs");

const client = ldap.createClient({
    url: `ldap://${process.env.LDAP_HOST}:${process.env.LDAP_PORT}`,
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    console.log("CN=Nima Badiei,OU=OU_Programmoer,OU=OU_Elever,OU=OU_IT-SKP,OU=OU_Main,DC=ITSKP-ODENSE,DC=dk")
    console.log(`cn=${username},OU=OU_Programmoer,${process.env.LDAP_USERS}`)

    client.bind(
        `cn=${username},OU=OU_Programmoer,${process.env.LDAP_USERS}`,
        password,
        (err) => {
            if (err) {
                if (err.name === "InvalidCredentialsError") {
                    console.log("Invalid credentials");
                    res.status(401).json({ error: "Invalid credentials" });
                }
            } else {
                console.log("Login successful");
                res.json({ message: "Login successful" });
            }
        }
    );
});

module.exports = router;
