const userRouter = require("express").Router();
const {
  getUsers,
  createUser,
  editUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

userRouter.route("/").get(getUsers);
userRouter.route("/create").post(createUser);
userRouter.route("/:id/edit").get(editUser);
userRouter.route("/:id/update").put(updateUser);
userRouter.route("/:id/delete").delete(deleteUser);

module.exports = userRouter;
