const Transaction = require("../models/transactions");
const Customer = require("../models/customers");

const createTransactions = async (req, res) => {
  const { from, to, amount } = req.body;
  const transaction = new Transaction({ from, to, amount });

  try {
    await Customer.find({ email: from }).then(async (fromResult) => {
      console.log(fromResult[0].balance);
      if (fromResult[0].balance > amount)
        await Customer.findOneAndUpdate(
          { email: transaction.from },
          { balance: fromResult[0].balance - amount }
        );
      else res.status(302).json({ message: "Insufficient balance" });
    });
    await Customer.find({ email: to }).then(async (toResult) => {
      await Customer.findOneAndUpdate(
        { email: transaction.to },
        { balance: toResult[0].balance + Number(amount) }
      );
    });
  } catch (err) {
    console.log("error");
  }
  transaction
    .save()
    .then((result) => {
      console.log("Saved transaction", result);
      res.status(201).json({
        message: "Transfer request success",
        createdTransaction: result,
      });
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
};

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getTransactions, createTransactions };
