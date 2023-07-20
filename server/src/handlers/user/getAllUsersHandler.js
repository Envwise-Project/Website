const { getAllUsers } = require("../../controllers/user/getAllUsersController.js");

async function getAllUsersHandler(req, res) {

  try {
    const allUsers = await getAllUsers();

    res.status(202).send(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { getAllUsersHandler }
