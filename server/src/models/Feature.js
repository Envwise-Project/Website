const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Feature",
    {
      ID_Feature: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Type: {
        type: DataTypes.STRING(50),
      },
      Country: {
        type: DataTypes.STRING(50),
      },
      City: {
        type: DataTypes.STRING(50),
      },
      Address: {
        type: DataTypes.STRING(100),
      },
      State: {
        type: DataTypes.STRING(50),
      },
      Zip_code: {
        type: DataTypes.STRING(10),
      },
      Description: {
        type: DataTypes.STRING(500),
      },
      Square_foot: {
        type: DataTypes.INTEGER,
      },
      Amenities: {
        type: DataTypes.STRING(200),
      },
      Rooms: {
        type: DataTypes.INTEGER,
      },
      Occupancy_Status: {
        type: DataTypes.STRING(50),
      },
      Link_Image_BLOB: {
        type: DataTypes.STRING(100),
      },
      Link_Document: {
        type: DataTypes.STRING(100),
      },
      Current_Emission: {
        type: DataTypes.DECIMAL(10, 2),
      },
      Expected_Emission_Level: {
        type: DataTypes.DECIMAL(10, 2),
      },
      More: {
        type: DataTypes.STRING(100),
      },
      Last_Update: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "Feature",
      timestamps: false,
    }
  );
};
