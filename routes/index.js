const express = require("express");
const router = express.Router();

// Handling all routes under api
router.use("/api", require("./api/index"));

module.exports = router;