const Hotel = require("../models/Hotel");

//all hotels present
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    if (hotels) {
      return res.status(201).json({
        status: "failed",
        msg: "all hotels fetched successfully",
        data: hotels,
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
  const id = req.params.id;
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
//update hotels
const updateHotel = async (req, res) => {
  const id = req.params.id;
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    );
    if (hotel) {
      return res.status(201).json({
        status: "success",
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

//deleteHotels
const deleteHotel = async (req, res) => {
  const id = req.params.id;
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

const countByType = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    if (hotels) {
      return res.status(201).json({
        status: "failed",
        msg: "all hotels fetched successfully",
        data: hotels,
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

const countByCity = async (req, res) => {
  try {
    const cities = req.query.cities.split(",");
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    if (list) {
      return res.status(201).json({
        status: "failed",
        msg: "city count fetched successfully",
        data: list,
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

module.exports = {
  getHotels,
  createHotel,
  editHotel,
  updateHotel,
  deleteHotel,
  countByType,
  countByCity,
};
