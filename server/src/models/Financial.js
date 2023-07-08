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
      },
      Investement_type: {
        type: DataTypes.STRING(50),
      },
      Percent_of_property_tokenized: {
        type: DataTypes.DECIMAL(5, 2),
      },
      Rental_yield: {
        type: DataTypes.DECIMAL(5, 2),
      },
      Number_of_tokens_available: {
        type: DataTypes.INTEGER,
      },
      Passive_Income_per_token: {
        type: DataTypes.DECIMAL(10, 2),
      },
      Token_Price: {
        type: DataTypes.DECIMAL(10, 2),
      },
      Monthly_capital_repayment_amount: {
        type: DataTypes.DECIMAL(10, 2),
      },
      Capital_payment_duration: {
        type: DataTypes.DECIMAL(10, 2),
      },
    },
    {
      tableName: "Financial",
      timestamps: false,
    }
  );
};
