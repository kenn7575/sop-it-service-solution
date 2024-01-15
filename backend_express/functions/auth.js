var jwt = require("jsonwebtoken");
// const { authenticate } = require('ldap-authentication')

// cosnoptions = {
//     ldapOpts: {
//       url: 'ldap://ldap.forumsys.com',
//       // tlsOptions: { rejectUnauthorized: false }
//     },
//     userDn: 'uid=einstein,dc=example,dc=com',
//     userPassword: 'password',
//     userSearchBase: 'dc=example,dc=com',
//     usernameAttribute: 'uid',
//     username: 'einstein',
//     // starttls: false
//   }

function authenticateUser(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: "Access denied" });

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        if (err.name === "TokenExpiredError")
            return res.status(401).json({ error: "Token expired" });

        return res.status(400).json({ error: "Invalid token" });
    }
}

module.exports = { authenticateUser };
