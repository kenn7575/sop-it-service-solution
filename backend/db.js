const mysql = require("mysql2/promise");
const { generateFilter } = require("./functions/dbLogic");

class Database {
  pool;
  conn;

  constructor() {
    this.pool = mysql.createPool(process.env.DB_URI);
  }

  async transaction() {
    this.conn = await this.pool.getConnection();

    await this.conn.beginTransaction();

    return this.conn;
  }

  async commit() {
    await this.conn.commit();

    this.conn.release();
  }

  async validateTable(table) {
    const conn = await this.pool.getConnection();

    const [result] = await conn.query(`SHOW TABLES LIKE '${table}'`);

    conn.release();

    return result.length > 0;
  }

  async find(table, filter = {}) {
    if (!(await this.validateTable(table))) {
      return { error: `Invalid table name '${table}' ` };
    }

    const conn = this.conn || (await this.pool.getConnection());

    const [rows] = await conn.query(
      `SELECT * FROM ${table} ${generateFilter(filter)}`
    );

    conn.release();

    if (
      Object.keys(filter)[0] === "UUID" &&
      typeof parseInt(Object.values(filter)[0]) === "number"
    )
      return rows[0];

    return rows;
  }

  async findOne(table, filter) {
    if (!(await this.validateTable(table))) {
      return { error: `Invalid table name '${table}' ` };
    }

    const conn = this.conn || (await this.pool.getConnection());

    const [rows] = await conn.query(
      `SELECT * FROM ${table} ${generateFilter(filter)} LIMIT 1`
    );

    conn.release();

    if (rows.length === 0) return { error: "Not found" };

    return rows[0];
  }

  async create(table, data = {}) {
    if (!(await this.validateTable(table))) {
      return { error: `Invalid table name '${table}' ` };
    }

    if (Object.keys(data).length === 0) return { error: "No data provided" };

    const conn = this.conn || (await this.pool.getConnection());

    const [newRow] = await conn.query(`INSERT INTO ${table} SET ?`, data);

    conn.release();

    if (newRow.insertId == 0) return;

    const insertedRow = await this.findOne(table, {
      UUID: newRow.insertId,
    });

    return insertedRow;
  }

  async update(table, filter = {}, data = {}) {
    if (!(await this.validateTable(table))) {
      return { error: `Invalid table name '${table}' ` };
    }

    if (Object.keys(data).length === 0) return { error: "No data provided" };
    if (Object.keys(filter).length === 0)
      return { error: "No filter provided" };

    const conn = this.conn || (await this.pool.getConnection());

    const [{ affectedRows }] = await conn.query(
      `UPDATE ${table} SET ? WHERE ${Object.keys(filter)[0]} IN (?)`,
      [data, Object.values(filter)[0]]
    );

    if (affectedRows == 0) return { error: "Not found" };

    conn.release();

    if (affectedRows == 1) {
      const updatedRow = await this.findOne(table, filter);
      return updatedRow;
    } else {
      return { affectedRows };
    }
  }

  async delete(table, filter = {}) {
    if (!(await this.validateTable(table))) {
      return { error: `Invalid table name '${table}' ` };
    }

    if (Object.keys(filter).length === 0)
      return { error: "No filter provided" };

    const conn = await this.pool.getConnection();

    var deletedRow = await this.findOne(table, filter);

    if (deletedRow.error) return deletedRow;

    const [{ affectedRows }] = await conn.query(
      `DELETE FROM ${table} WHERE ?`,
      filter
    );

    if (affectedRows === 0) return { error: "Not found" };

    conn.release();

    return deletedRow;
  }
}

module.exports = {
  Database,
  db: new Database(),
};
