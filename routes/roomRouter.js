const roomRouter = require("express").Router();
const {
  getRooms,
  createRoom,
  editRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/RoomController");
const admin = require("../middlewares/adminMiddleware");

roomRouter.route("/").get(admin, getRooms);
roomRouter.route("/create/:hotelId").post(admin, createRoom);
roomRouter.route("/:id/edit").get(admin, editRoom);
roomRouter.route("/:id/update").put(admin, updateRoom);
roomRouter.route("/:id/delete/:hotelId").delete(admin, deleteRoom);

module.exports = roomRouter;
