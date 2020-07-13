const express = require("express");
const router = express.Router();
const { checkAuth } = require("../../../middleware/auth");
const patientController=require('../../../controller/api/v1/patients')

// Can access this route only if doctor is logged in (Restricted Routes)
router.post("/register", checkAuth, patientController.registerPatient);
router.post("/:id/create_report", checkAuth, patientController.createReport);

router.get("/:id/all_reports", patientController.allReports);

module.exports = router;