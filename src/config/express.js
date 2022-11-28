"use strict";

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

require("./../routes/routes")(app);

module.exports = app;
