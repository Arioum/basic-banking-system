const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  name: String,
  email: String,
  balance: Number,
});

const Customer = mongoose.model("Customers", customerSchema);
module.exports = Customer;
