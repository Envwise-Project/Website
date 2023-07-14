const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Owner",
    {
      ID_owner: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Firstname: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      Surname: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      Address: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      City: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      State: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Country: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Postal_Code: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      Mail: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      Phone_number: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      Code_area: {
        type: DataTypes.STRING(10),
        allowNull:false,
      },
      Passport_ID: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      Date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "Owner",
      timestamps: false,
    }
  );
};
