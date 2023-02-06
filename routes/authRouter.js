const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  login,
  register,
} = require("../controllers/AuthController");
const {
  
} = require("../controllers/HotelController");

router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
