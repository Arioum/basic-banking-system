const express = require("express");
const router = express.Router();

router.get("/all-customers", (req, res) => {
  res.json({ body: "Hello World" + Date.now() });
});

router.get("/", (req, res) => {
  res.render("hello");
});

module.exports = router;
