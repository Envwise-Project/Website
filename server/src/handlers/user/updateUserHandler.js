const {
  updateUser,
} = require("../../controllers/user/updateUserController.js");

async function updateUserHandler(req, res) {
  const { userId, saved, invested, published } = req.query;

  try {
    const updatedUser = await updateUser(userId, saved, invested, published);

    res.status(202).send(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { updateUserHandler };
