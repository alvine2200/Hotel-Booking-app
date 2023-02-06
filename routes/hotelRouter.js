const router = require("express").Router();
const { createHotel } = require("../controllers/HotelController");

router.post("/create", createHotel);

module.exports = router;
