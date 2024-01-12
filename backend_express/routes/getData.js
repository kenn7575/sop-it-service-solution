const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
    const table = req.query.table;
    const UUID = (req.query.UUID && `WHERE UUID = '${req.query.UUID}'`) || "";

    if (!table) return res.status(400).json({ error: "Invalid table name" });

    const [rows] = await pool.query(`SELECT * FROM ${table} ${UUID}`);

    const result = rows.length === 1 ? rows[0] : rows;

    return res.json(result);
});

module.exports = router;
