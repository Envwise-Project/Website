const { User } = require("../../db.js");

async function updateUser(userId, saved, invested, published) {
  try {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error("User not found.");
    }

    if (saved) {
      await user.addSavedProperties(saved);
    } else if (invested) {
      await user.addInvestedProperties(invested);
    } else if (published) {
      await user.addPublishedProperties(published);
    } else {
      throw new Error(
        "Invalid property type. Please specify 'saved', 'invested', or 'published'."
      );
    }

    return user;
  } catch (error) {
    throw new Error("Failed to create property for the user.");
  }
}

module.exports = { updateUser };
