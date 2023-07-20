const {
  createTransaction,
} = require("../../controllers/transaction/createTransaction.js");

async function createTransactionHandler(req, res) {

  const transactionData = req.body;

  try {
    const createdTransaction = await createTransaction(transactionData);

    res.status(200).send(createdTransaction);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: "Failed to create transaction." });
  }
}

module.exports = { createTransactionHandler };
