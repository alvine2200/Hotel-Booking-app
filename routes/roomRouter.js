const roomRouter = require("express").Router();
const {
  getRooms,
  createRoom,
  editRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/RoomController");

roomRouter.route("/").get(getRooms);
roomRouter.route("/create").post(createRoom);
roomRouter.route("/:id/edit").get(editRoom);
roomRouter.route("/:id/update").put(updateRoom);
roomRouter.route("/:id/delete").delete(deleteRoom);

module.exports = roomRouter;
