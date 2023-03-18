const Transaction = require("../models/transactions");
const Customer = require("../models/customers");

const createTransactions = async (req, res) => {
  const { from, to, amount } = req.body;
  const transaction = new Transaction({
    from,
    to,
    amount,
  });

  try {
    await Customer.find({ email: transaction.from }).then(
      async (fromResult) => {
        await Customer.find({ email: transaction.to }).then((toResult) => {
          if (fromResult.balance > amount)
            return fromResult.balance - amount && toResult + amount;
          else res.status(302).json({ message: "Insufficient balance" });
        });
      }
    );
  } catch (err) {}

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
