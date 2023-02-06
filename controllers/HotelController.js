const Hotel = require("../models/Hotel");

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
      error: error,
    });
  }
};
