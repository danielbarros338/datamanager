"use strict";

class Table {
  #tableName;
  #columns;

  constructor(tableName, columns = []) {
    this.#tableName = tableName;
    this.#columns = columns;
  }

  setTableName(tableName) {
    this.#tableName = tableName;
  }

  setAllColumns(columns) {
    this.#columns = columns;
  }

  getName() {
    return this.#tableName;
  }

  getColumns() {
    return this.#columns;
  }

  getColumnsSQL() {
    const columns = this.#columns.map((column) => {
      const constraint = column.getAllConstraints();

      return `${constraint.columnName} ${constraint.columnType} ${
        constraint.isPrimaryKey ? constraint.isPrimaryKey : ""
      } ${constraint.autoIncrement ? constraint.autoIncrement : ""} ${
        constraint.notNull ? constraint.notNull : ""
      } ${constraint.uniqueIndex ? constraint.uniqueIndex : ""} ${
        constraint.binaryColumn ? constraint.binaryColumn : ""
      } ${constraint.unsigned ? constraint.unsigned : ""} ${
        constraint.defaultValue ? constraint.defaultValue : ""
      }`.trim();
    });

    return columns;
  }
}

module.exports = Table;
