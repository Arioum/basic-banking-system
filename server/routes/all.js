const express = require("express");
const router = express.Router();
const getCustomers = require("../controllers/customer.controller");

router.get("/all-customers", (req, res) => {
  res.json({ body: "Hello World" + Date.now() });
});

router.get("/customers", getCustomers);

router.get("/transactions", (req, res) => {
  res.json({ body: "Hello World" + Date.now() });
});

module.exports = router;
