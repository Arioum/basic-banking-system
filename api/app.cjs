const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.API_PORT || 4000;

app.use(cors());

app.get("/api/all-customers", (req, res) => {
  res.json({ body: "Hello World" + Date.now() });
});

if (port) app.listen(port);

module.exports = app;
