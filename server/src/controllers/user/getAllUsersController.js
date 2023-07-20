const { User, Property, Transaction } = require("../../db.js");

async function getAllUsers() {
  try {
    const allUsers = await User.findAll({
      include: [
        { model: Property, as: "savedProperties" },
        { model: Property, as: "publishedProperties" },
        { model: Property, as: "investedProperties" },

        {
          model: Transaction,
          as: "transactions",
        },
      ],
    });

    return allUsers;
  } catch (error) {
    throw new Error(
      "Failed to fetch all users and their properties from the database."
    );
  }
}

module.exports = { getAllUsers };
