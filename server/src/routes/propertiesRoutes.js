const { Router } = require("express");
const { createPropertyHandler } = require("../handlers/createPropertyHandler.js");
const {
  getAllPropertiesHandler,
} = require("../handlers/getAllPropertiesHandler.js");
const propertyRouter = Router();

propertyRouter.get("/", getAllPropertiesHandler);
propertyRouter.post("/", createPropertyHandler);


module.exports = propertyRouter;
