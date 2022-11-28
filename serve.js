"use strict";

const app = require("./src/config/express.js");

app.listen(process.env.PORT || 3000, () => console.log("Server online"));