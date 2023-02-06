const Hotel = require("../models/Hotel");

//create hotel
const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create({ ...req.body });
    if (hotel) {
      return res.status(201).json({
        status: "failed",
        msg: "New hotel created successfully",
        data: hotel,
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
const editHotel = async (req, res) => {
  const id = req.params;
  try {
    const hotel = await Hotel.findById(id);
    if (hotel) {
      return res.status(200).json({
        status: "failed",
        msg: "hotel details fetched successfully",
        data: hotel,
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

const updateHotel = async (req, res) => {
  const id = req.params;
  try {
    const hotel = await Hotel.findByIdAndUpdate({ _id: id }, ...req.body, {
      new: true,
      runValidators: true,
    });
    if (hotel) {
      return res.status(201).json({
        status: "failed",
        msg: "hotel details updated successfully",
        data: hotel,
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

const deleteHotel = async (req, res) => {
  const id = req.params;
  try {
    const hotel = await Hotel.findByIdAndDelete(id);
    if (hotel) {
      return res.status(201).json({
        status: "failed",
        msg: "hotel details deleted successfully",
        data: hotel,
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

module.export = { createHotel, editHotel, updateHotel, deleteHotel };
