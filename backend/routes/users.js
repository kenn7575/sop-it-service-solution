const express = require('express');
const router = express.Router();
const pool = require("../db");

router.delete('/:UUID', async (req, res) => {
    const { UUID } = req.params;

    if (!UUID) return res.status(400).json({ error: "Invalid UUID" });

    const [rows] = await pool.query(`DELETE FROM users WHERE UUID = ?`, [UUID]);

    return res.json(rows);
});

module.exports = router;