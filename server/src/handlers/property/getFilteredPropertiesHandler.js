const {
  getFilteredProperties,
} = require("../../controllers/property/getFilteredPropertiesController.js");

async function getFilteredPropertiesHandler(req, res) {
  try {
    const financeType = req.query.financeType || null;
    const rentalYield = req.query.rentalYield || null;
    const location = req.query.location || null;

    const properties = await getFilteredProperties(
      financeType,
      rentalYield,
      location
    );

    res.status(200).send(properties);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { getFilteredPropertiesHandler };
