const hotelRouter = require("express").Router();
const {
  getHotels,
  createHotel,
  editHotel,
  updateHotel,
  deleteHotel,
  countByCity,
  countByType,
} = require("../controllers/HotelController");

hotelRouter.route("/").get(getHotels);
hotelRouter.route("/create").post(createHotel);
hotelRouter.route("/:id/edit").get(editHotel);
hotelRouter.route("/:id/update").put(updateHotel);
hotelRouter.route("/:id/delete").delete(deleteHotel);

hotelRouter.route("/countByCity").get(countByCity);
hotelRouter.route("/countByType").get(countByType);

module.exports = hotelRouter;
