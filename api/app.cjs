const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.API_PORT || 4000;

app.use(cors());

app.get("/api/all-customers", (req, res) => {
  res.json({ body: "Hello World" + Date.now() });
});

if (process.env.API_PORT) app.listen(process.env.API_PORT);

module.exports = app;
