const { Property, Owner, Financial, Feature } = require("../../db");

async function getFilteredProperties(financeType, rentalYield, location) {
  try {
    const filterFinancialOptions = {};
    const filterFeatureOptions = {};

    if (financeType) {
      filterFinancialOptions["Investment_type"] = financeType;
    }

    if (rentalYield) {
      filterFinancialOptions["Rental_yield"] = rentalYield;
    }

    if (location) {
      filterFeatureOptions["Country"] = location;
    }

    const filteredProperties = await Property.findAll({
      include: [
        {
          model: Financial,
          where: filterFinancialOptions,
        },
        {
          model: Owner,
        },
        {
          model: Feature,
          where: filterFeatureOptions
        }
      ],
    });

    return filteredProperties;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener propiedades filtradas");
  }
}

module.exports = { getFilteredProperties };
