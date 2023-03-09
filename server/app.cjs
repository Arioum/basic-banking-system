require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const routes = require("./routes/all.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", routes);

const port = process.env.PORT || 4000;

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongodb connected");
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });

module.exports = app;