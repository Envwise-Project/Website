const {
  getAllProperties,
} = require("../controllers/getAllPropertiesController.js");

async function getAllPropertiesHandler(req, res) {
  try {
    const properties = await getAllProperties();

    res.status(200).send(properties);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { getAllPropertiesHandler };
