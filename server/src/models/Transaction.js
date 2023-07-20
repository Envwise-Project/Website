const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Transaction",
    {
      Transaction_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Transaction_Date: {
        type: DataTypes.DATE,
      },
      Token_quantity: {
        type: DataTypes.INTEGER,
      },
      Price: {
        type: DataTypes.DECIMAL(10, 2),
      },
      Payment_Method: {
        type: DataTypes.STRING(50),
      },
      Payment_Currency: {
        type: DataTypes.STRING(10),
      },
      ID_User: {
        type: DataTypes.INTEGER,
      },
      ID_Property: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "Transaction",
      timestamps: false,
    }
  );
};
