const express = require("express");
const router = express.Router();

// Handling all routes falls under v1
router.use("/v1", require("./v1/index"));

module.exports = router;