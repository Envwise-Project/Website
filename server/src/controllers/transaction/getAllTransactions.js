const { Transaction, User, Property } = require("../../db.js");

async function getAllTransactions() {
  try {
    const allTransactions = await Transaction.findAll({
      include: [
        { model: User, as: "user" },
        { model: Property, as: "property" }, 
      ],
    });

    return allTransactions;
  } catch (error) {
    console.error("Error fetching all transactions:", error);
    throw new Error("Failed to fetch all transactions from the database.");
  }
}

module.exports = { getAllTransactions };
