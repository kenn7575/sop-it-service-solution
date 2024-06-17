const express = require('express');
const router = express.Router();

const { sendMail } = require('../functions/mail');

router.post('/', async (req, res) => {
    const { to, subject, text } = req.body;

    await sendMail(to, subject, text);

    res.send({ success: true });
});

module.exports = router;