const User = require("../models/User");

//all users present
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      return res.status(201).json({
        status: "failed",
        msg: "all users fetched successfully",
        data: users,
      });
    } else {
      return res
        .status(500)
        .json({ status: "failed", msg: "something went wrong, try again" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      msg: "something went wrong, try again",
      error: error.message,
    });
  }
};
//create hotel
const createUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    if (user) {
      return res.status(201).json({
        status: "failed",
        msg: "New user created successfully",
        data: user,
      });
    } else {
      return res
        .status(500)
        .json({ status: "failed", msg: "something went wrong, try again" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      msg: "something went wrong, try again",
      error: error.message,
    });
  }
};

//edit hotel
const editUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (user) {
      return res.status(200).json({
        status: "failed",
        msg: "user details fetched successfully",
        data: user,
      });
    } else {
      return res
        .status(500)
        .json({ status: "failed", msg: "something went wrong, try again" });
    }
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      msg: "something went wrong, try again",
      error: error.message,
    });
  }
};
//update users
const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    );
    console.log(user);
    if (user) {
      return res.status(201).json({
        status: "failed",
        msg: "user details updated successfully",
        data: user,
      });
    } else {
      return res
        .status(500)
        .json({ status: "failed", msg: "something went wrong, try again" });
    }
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      msg: "something went wrong, try again ...",
      error: error.message,
    });
  }
};

//deleteusers
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
    if (user) {
      return res.status(201).json({
        status: "failed",
        msg: "user details deleted successfully",
        data: [],
      });
    } else {
      return res
        .status(500)
        .json({ status: "failed", msg: "something went wrong, try again" });
    }
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      msg: "something went wrong, try again",
      error: error.message,
    });
  }
};

module.exports = { getUsers, createUser, editUser, updateUser, deleteUser };
