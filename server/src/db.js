require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");


const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  {
    host: process.env.PGHOST,
    dialect: 'postgres',
  }
);
/*
const { AZURE_POSTGRESQL_HOST, AZURE_POSTGRESQL_PORT, AZURE_POSTGRESQL_DATABASE, AZURE_POSTGRESQL_USER, AZURE_POSTGRESQL_PASSWORD, AZURE_POSTGRESQL_SSL } = process.env;

const sequelize = new Sequelize({
  host: AZURE_POSTGRESQL_HOST,
  port: AZURE_POSTGRESQL_PORT,
  database: AZURE_POSTGRESQL_DATABASE,
  username: AZURE_POSTGRESQL_USER,
  password: AZURE_POSTGRESQL_PASSWORD,
  dialect: 'postgres',
  logging: false,
  native: false,
  ssl: AZURE_POSTGRESQL_SSL,
});
*/

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Owner, Feature, Financial, Property } = sequelize.models;


// Relaciones entre modelos

Owner.hasMany(Property, { foreignKey: 'ID_owner' });
Property.belongsTo(Owner, { foreignKey: 'ID_owner' });

Property.hasOne(Financial, { foreignKey: 'ID_Financial' });
Financial.belongsTo(Property, { foreignKey: 'ID_Financial' });

Property.hasOne(Feature, { foreignKey: 'ID_Feature' });
Feature.belongsTo(Property, { foreignKey: 'ID_Feature' });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
