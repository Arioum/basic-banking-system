const Customer = require("../models/customers");

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    console.log(customers);
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = getCustomers;
