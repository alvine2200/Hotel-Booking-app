const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const checkEmail = async function () {
      const email = req.body.email;
      const mail = await User.findOne({ email: email });
      if (mail) {
        return res
          .status(500)
          .json({ status: "failed", message: "email already taken" });
      }
    };
    checkEmail();
    const user = await User.create({ ...req.body });
    const token = await user.createJwt();
    if (user) {
      return res.status(201).json({
        status: "success",
        message: "User created successfully",
        name: user.getName(),
        data: user,
        token: token,
      });
    }
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({
        status: "failed",
        message: "User not found, Enter correct details",
      });
    }
    const isMatch = await user.isPasswordCorrect(req.body.password);
    if (!isMatch) {
      return res.status(401).json({
        status: "failed",
        message: "Invalid credentials, try again",
      });
    }
    const token = await user.createJwt();
    const { password, isAdmin, ...others } = user._doc;

    return res
      .status(200)
      .json({ status: "successful", data: others, token: token });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      status: "failed",
      error: error.message,
      message: "something went wrong",
    });
  }
};

module.exports = { login, register };
