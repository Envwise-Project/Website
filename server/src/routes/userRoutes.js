const { Router } = require("express");

const { getAllUsersHandler } = require("../handlers/user/getAllUsersHandler.js");
const {
  getPropertiesUserHandler,
} = require("../handlers/user/getPropertiesUserHandler.js");
const { createUserHandler } = require("../handlers/user/createUserHandler.js");
const { updateUserHandler } = require("../handlers/user/updateUserHandler.js");

const userRouter = Router();

userRouter.post("/", createUserHandler);
userRouter.get("/", getAllUsersHandler);
userRouter.post("/update", updateUserHandler);
userRouter.get("/:userId/type", getPropertiesUserHandler);

module.exports = userRouter;
