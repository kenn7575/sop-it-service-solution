const mysql = require("mysql2/promise");

const pool = mysql.createPool(process.env.DB_URI);

class Database {
  pool;
  conn;

  constructor() {
    this.pool = pool;
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

    if (Object.keys(filter).length === 0) filter = null;

    const [rows] = await conn.query(
      `SELECT * FROM ${table} ${filter ? "WHERE ?" : ""}`,
      filter || []
    );

    conn.release();

    return rows;
  }

  async findOne(table, filter) {
    if (!(await this.validateTable(table))) {
      return { error: `Invalid table name '${table}' ` };
    }

    const conn = this.conn || (await this.pool.getConnection());

    const [rows] = await conn.query(
      `SELECT * FROM ${table} WHERE ? LIMIT 1`,
      filter
    );

    conn.release();

    if (rows.length === 0) return { error: "Not found" };

    return rows[0];
  }

  async create(table, data = {}, noReturn = false) {
    if (!(await this.validateTable(table))) {
      return { error: `Invalid table name '${table}' ` };
    }

    if (Object.keys(data).length === 0) return { error: "No data provided" };

    const conn = this.conn || (await this.pool.getConnection());

    const [newRow] = await conn.query(`INSERT INTO ${table} SET ?`, data);

    conn.release();

    if (noReturn) return;

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

    var deletedRow = await this.findOne(table, { UUID });

    if (deletedRow.error) return deletedRow;

    const [{ affectedRows }] = await conn.query(
      `DELETE FROM ${table} WHERE ?`,
      [UUID]
    );

    if (affectedRows === 0) return { error: "Not found" };

    conn.release();

    return deletedRow;
  }
}

module.exports = {
  pool,
  Database,
  db: new Database(),
};
