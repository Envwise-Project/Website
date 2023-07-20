const { Property, Owner, Financial, Feature } = require("../../db");

async function getAllProperties() {
  const properties = await Property.findAll({
    include: [Owner, Financial, Feature],
  });

  return properties;
}

module.exports = { getAllProperties };
