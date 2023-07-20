const { getAllTransactions } = require("../../controllers/transaction/getAllTransactions.js")

async function getAllTransactionsHandler(req, res) {

  try {
    const allTransactions = await getAllTransactions();

    res.status(200).send(allTransactions);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: "Failed to fetch all transactions from DB." });
  }
}

module.exports = { getAllTransactionsHandler }
