const hotelRouter = require("express").Router();
const {
  getHotels,
  createHotel,
  editHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/HotelController");

hotelRouter.route("/").get(getHotels);
hotelRouter.route("/create").post(createHotel);
hotelRouter.route("/:id/edit").get(editHotel);
hotelRouter.route("/:id/update").put(updateHotel);
hotelRouter.route("/:id/delete").delete(deleteHotel);

module.exports = hotelRouter;
