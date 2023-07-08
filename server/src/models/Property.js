const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Property",
    {
      ID_Property: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ID_owner: {
        type: DataTypes.INTEGER,
        references: {
          model: "Owner",
          key: "ID_owner",
        },
      },
      ID_Financials: {
        type: DataTypes.INTEGER,
        references: {
          model: "Financial",
          key: "ID_Financial",
        },
      },
      ID_Features: {
        type: DataTypes.INTEGER,
        references: {
          model: "Feature",
          key: "ID_Feature",
        },
      },
    },
    {
      tableName: "Property",
      timestamps: false,
    }
  );
};
