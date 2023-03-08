const express = require("express");
require("dotenv").config();
const http = require("http");
const cors = require("cors");

const app = express();
http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 4000;

app.get("/all-customers", (req, res) => {
  res.json({ body: "Hello World" + Date.now() });
});

if (port) app.listen(port);

// mongoose.connect(process.env.MONGODB_URL).then(() => {
//   console.log("Mongodb connected");
//   server.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });
// }).catch((err) => {
//   console.log({ err });
//   process.exit(1);
// });

module.exports = app;
