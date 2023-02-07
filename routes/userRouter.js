const userRouter = require("express").Router();
const admin = require("../middlewares/adminMiddleware");
const {
  getUsers,
  createUser,
  editUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

userRouter.route("/").get(admin, getUsers);
userRouter.route("/create").post(admin, createUser);
userRouter.route("/:id/edit").get(admin, editUser);
userRouter.route("/:id/update").put(admin, updateUser);
userRouter.route("/:id/delete").delete(admin, deleteUser);

module.exports = userRouter;
