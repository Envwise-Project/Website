const { Router } = require("express");
const {
  createPropertyHandler,
} = require("../handlers/createPropertyHandler.js");
const {
  getAllPropertiesHandler,
} = require("../handlers/getAllPropertiesHandler.js");
const {
  getFilteredPropertiesHandler,
} = require("../handlers/getFilteredPropertiesHandler.js");
const propertyRouter = Router();

propertyRouter.get("/", getAllPropertiesHandler);
propertyRouter.post("/", createPropertyHandler);
propertyRouter.get("/filter", getFilteredPropertiesHandler);

module.exports = propertyRouter;
