const {
  createProperty,
} = require("../../controllers/property/createPropertyController.js");

async function createPropertyHandler(req, res) {
  const property = req.body;

  try {
    const createdProperty = await createProperty(property);

    res.status(202).send(createdProperty);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { createPropertyHandler };
