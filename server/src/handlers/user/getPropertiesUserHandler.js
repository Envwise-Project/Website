const { getPropertiesUser } = require("../../controllers/user/getPropertiesUserController.js");

async function getPropertiesUserHandler(req, res) {
  const userId = req.params.userId; 
  const { type } = req.query;

  try {
    const properties = await getPropertiesUser(userId, type);

    res.status(202).send(properties);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { getPropertiesUserHandler };
