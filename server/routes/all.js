const express = require("express");
const router = express.Router();
const getCustomers = require("../controllers/customer.controller");
const { getTransactions, createTransactions } = require("../controllers/transaction.controller");

router.get("/customers", getCustomers);

router.post("/new-transfer", createTransactions);
router.get("/transactions", getTransactions);

module.exports = router;
