const { User, Property } = require("../../db.js");

async function getAllUsers() {
  try {
    const allUsers = await User.findAll({
      include: [
        { model: Property, as: "savedProperties" },
        { model: Property, as: "publishedProperties" },
        { model: Property, as: "investedProperties" },
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
