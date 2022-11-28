"use strict";

class Columns {
  #columnName;
  #columnType;
  #isPrimaryKey;
  #isForeignKey;
  #autoIncrement;
  #notNull;
  #uniqueIndex;
  #binaryColumn;
  #unsigned;
  #defaultValue;

  constructor(columnObj) {
    this._checkErrors(columnObj);

    this.#columnName = columnObj.columnName;
    this.#columnType = columnObj.columnType;
    this.#isPrimaryKey = columnObj.isPrimaryKey ? "PRIMARY KEY" : false;
    this.#isForeignKey = columnObj.isForeignKey;
    this.#autoIncrement = columnObj.autoIncrement ? "auto_increment" : false;
    this.#notNull = columnObj.notNull ? "NOT NULL" : false;
    this.#uniqueIndex = columnObj.uniqueIndex;
    this.#binaryColumn - columnObj.binaryColumn;
    this.#unsigned = columnObj.unsigned ? "UNSIGNED" : false;
    this.#defaultValue = columnObj.defaultValue
      ? `DEFAULT ${columnObj.defaultValue.value}`
      : false;
  }

  _checkErrors(columnObj) {
    if (!columnObj.columnName) {
      throw new Error("Column with no name!");
    }

    if (!columnObj.columnType) {
      throw new Error("Column with no type!");
    }
  }

  setColumnName(columnName) {
    this.#columnName = columnName;
  }
  setColumnType(columnType) {
    this.#columnType = columnType;
  }
  setIsPrimaryKey(isPrimaryKey) {
    this.#isPrimaryKey = isPrimaryKey;
  }
  setIsForeignKey(isForeignKey) {
    this.#isForeignKey = isForeignKey;
  }
  setAutoIncrement(autoIncrement) {
    this.#autoIncrement = autoIncrement;
  }
  setNotNull(notNull) {
    this.#notNull = notNull;
  }
  setUniqueIndex(uniqueIndex) {
    this.#uniqueIndex = uniqueIndex;
  }
  setBinaryColumn(binaryColumn) {
    this.#binaryColumn = binaryColumn;
  }
  setUnsigned(unsigned) {
    this.#unsigned = unsigned;
  }
  setDefaultValue(defaultValue) {
    this.#defaultValue = defaultValue;
  }
  getAllConstraints() {
    return {
      columnName: this.#columnName,
      columnType: this.#columnType,
      isPrimaryKey: this.#isPrimaryKey,
      isForeignKey: this.#isForeignKey,
      autoIncrement: this.#autoIncrement,
      notNull: this.#notNull,
      uniqueIndex: this.#uniqueIndex,
      binaryColumn: this.#binaryColumn,
      unsigned: this.#unsigned,
      defaultValue: this.#defaultValue,
    };
  }
}

module.exports = Columns;
