const Room = require("../models/Room");

//all hotels present
const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    if (rooms) {
      return res.status(201).json({
        status: "failed",
        msg: "all rooms fetched successfully",
        data: rooms,
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
const createRoom = async (req, res) => {
  try {
    const room = await Room.create({ ...req.body });
    if (room) {
      return res.status(201).json({
        status: "failed",
        msg: "New room created successfully",
        data: room,
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
const editRoom = async (req, res) => {
  const id = req.params.id;
  try {
    const room = await Room.findById(id);
    if (room) {
      return res.status(200).json({
        status: "failed",
        msg: "room details fetched successfully",
        data: room,
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
//update hotels
const updateRoom = async (req, res) => {
  const id = req.params.id;
  try {
    const room = await Room.findByIdAndUpdate(
      id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    );
    if (room) {
      return res.status(201).json({
        status: "failed",
        msg: "room details updated successfully",
        data: room,
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

//deleteHotels
const deleteRoom = async (req, res) => {
  const id = req.params.id;
  try {
    const room = await Room.findByIdAndDelete(id);
    if (room) {
      return res.status(201).json({
        status: "failed",
        msg: "room details deleted successfully",
        data: room,
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

module.export = { getRooms, createRoom, editRoom, updateRoom, deleteRoom };
