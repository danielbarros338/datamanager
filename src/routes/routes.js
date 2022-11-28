"use strict";
const CreatorController = require("./../controllers/CreatorController");

module.exports = (app) => {
  app.post("/", CreatorController.createTable);
};
