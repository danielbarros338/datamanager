"use strict";
const sequelize = require("./../config/db");

const Table = require("./../models/Table");
const Column = require("./../models/Columns");

exports.createTable = async (req, res, next) => {
  const tableName = req.body.tableName;
  const columns = req.body.columns.map((column) => {
    return new Column(column);
  });

  const table = new Table(tableName, columns);

  try {
    const response = await sequelize.query(
      `CREATE TABLE ${table.getName()} (${table.getColumnsSQL().join(",")})`
    );
    res.json(response);
  } catch (err) {
    throw new Error(`Erro on insert table: ${err.message}`);
  }
};
