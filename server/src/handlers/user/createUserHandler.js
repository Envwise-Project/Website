const {
  createUser,
} = require("../../controllers/user/createUserController.js");

async function createUserHandler(req, res) {
  const { email, name } = req.body;

  try {
    const createdUser = await createUser(email, name);

    res.status(202).send(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { createUserHandler };
