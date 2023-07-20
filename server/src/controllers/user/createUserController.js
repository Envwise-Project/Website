const { User } = require("../../db");

async function createUser(email, name) {
  try {
    const [user, created] = await User.findOrCreate({
      where: { email }, 
      defaults: { name },
    });

    return user;
  } catch (error) {
    console.error(error)
    throw new Error("Failed to create the user in the database.");
  }
}

module.exports = { createUser };
