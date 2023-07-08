const { Router } = require("express");
const propertiesRoutes = require("./propertiesRoutes.js");

const router = Router();

router.use("/properties", propertiesRoutes);

module.exports = router;
