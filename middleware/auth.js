const jwt = require("jsonwebtoken");
const Doctor = require("../models/doctor");

// Middleware to check user is logged in and has access
exports.checkAuth = async (req, res, next) => {
  let token;
  // Check token in header 
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    console.log("Token Error");
    return res.status(401).json({
      success: false,
      message: "Unauthroized access"
    });
  }

  // Decode the token to Doctor id
  try {
    const decoded = jwt.verify(token, 'Hospital-COVID-API');
    console.log(decoded);
    req.doctor = await Doctor.findById(decoded.id);
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      success: false,
      message: "Unauthroized access"
    });
  }
};
