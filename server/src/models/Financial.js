const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Financial",
    {
      ID_Financial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Market_value_of_the_property: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      Investment_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Percent_of_property_tokenized: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      Rental_yield: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      Number_of_tokens_available: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Passive_Income_per_token: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      Token_Price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      Monthly_capital_repayment_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      Capital_payment_duration: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      Mortgage: {
        type: DataTypes.DECIMAL(10, 2),
      },
    },
    {
      tableName: "Financial",
      timestamps: false,
    }
  );
};
