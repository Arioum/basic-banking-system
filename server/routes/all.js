const express = require("express");
const router = express.Router();
// const getCustomers = require("../controllers/customer.controller");
const Customer = require("../models/customers");

router.get("/all-customers", (req, res) => {
  res.json({ body: "Hello World" + Date.now() });
});

router.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/transactions", (req, res) => {
  res.json({ body: "Hello World" + Date.now() });
});

module.exports = router;
