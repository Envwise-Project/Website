const { Router } = require("express");

const propertiesRoutes = require("./propertiesRoutes.js");
const userRoutes = require("./userRoutes.js");
const transactionRoutes = require("./transactionRoutes.js");

const router = Router();

router.use("/properties", propertiesRoutes);
router.use("/user", userRoutes);
router.use("/transaction", transactionRoutes);

module.exports = router;
