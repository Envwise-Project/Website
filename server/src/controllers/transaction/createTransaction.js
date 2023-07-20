const { Transaction } = require("../../db.js");

async function createTransaction(transactionData) {
  try {
    const newTransaction = await Transaction.create(transactionData);
    return newTransaction;
  } catch (error) {
    console.error("Error creating transaction:", error);
    throw new Error("Failed to create the transaction in the database.");
  }
}

module.exports = { createTransaction };
