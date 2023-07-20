const { User, Property } = require("../../db");

async function getPropertiesUser(userId, type) {
  try {
    const user = await User.findByPk(userId, {
      include: [
        { model: Property, as: "savedProperties" },
        { model: Property, as: "publishedProperties" },
        { model: Property, as: "investedProperties" },
      ],
    });

    if (!user) {
      throw new Error("User not found.");
    }

    let properties;
    if (type === "saved") {
      properties = await user.getSavedProperties();
    } else if (type === "invested") {
      properties = await user.getInvestedProperties();
    } else if (type === "published") {
      properties = await user.getPublishedProperties();
    } else if (type === "all") {
      properties = await user;
    } else {
      throw new Error(
        "Invalid property type. Please specify 'saved', 'invested', or 'published'."
      );
    }

    return properties;
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch properties for the user.");
  }
}

module.exports = { getPropertiesUser };
