const router = require("express").Router();
const {
  getHotels,
  createHotel,
  editHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/HotelController");

router.route("/").get(getHotels);
router.route("/create").post(createHotel);
router.route("/:id/edit").get(editHotel);
router.route("/:id/update").put(updateHotel);
router.route("/:id/delete").delete(deleteHotel);

module.exports = router;
