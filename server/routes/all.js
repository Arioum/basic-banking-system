const express = require("express");
const router = express.Router();
const getCustomers = require("../controllers/customer.controller");
const { getTransactions, createTransactions } = require("../controllers/transaction.controller");

router.get("/customers", getCustomers);

router.get("/transactions", getTransactions);
router.post("/transfer", createTransactions);

module.exports = router;
