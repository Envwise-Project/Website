const { Router } = require("express");

const propertiesRoutes = require("./propertiesRoutes.js");
const userRoutes = require("./userRoutes.js");

const router = Router();

router.use("/properties", propertiesRoutes);
router.use("/user", userRoutes);

module.exports = router;
