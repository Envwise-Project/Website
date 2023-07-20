const { Router } = require("express");

const {
  createTransactionHandler,
} = require("../handlers/transaction/createTransactionHandler.js");
const {
  getAllTransactionsHandler,
} = require("../handlers/transaction/getAllTransactionsHandler.js");

const transactionRouter = Router();

transactionRouter.post("/", createTransactionHandler);
transactionRouter.get("/", getAllTransactionsHandler);

module.exports = transactionRouter;
