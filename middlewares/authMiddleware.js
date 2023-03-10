const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
  //check headers if it contains valid token
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(403)
      .json({ status: "failed", message: "Not Authorized to access the page" });
  }
  const token = authHeader.split(" ")[1];
  try {
    //verify jwt token
    const payload = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = { userId: payload.userId, isAdmin: payload.isAdmin };
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ status: "failed", message: "Not Authorised to view" });
  }
};

module.exports = auth;
