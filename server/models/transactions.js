const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  from: String,
  to: String,
  balance: Number,
  time: {
    type: Date,
    default: new Date(),
  },
});

const Transaction = mongoose.model("Transactions", transactionSchema);
module.exports = Transaction;
