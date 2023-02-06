const express = require("express");
const authRoute = express.Router();
const { login, register } = require("../controllers/AuthController");

authRoute.route("/register").post(register);
authRoute.route("/login").post(login);

module.exports = authRoute;
