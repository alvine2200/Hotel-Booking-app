const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const checkEmail = async function () {
      const { email } = req.body;
      const mail = await User.findOne({ email });
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
    return res.status(500).json({ status: "failed", message: error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "failed",
        message: "Please complete your details and submit again",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        status: "failed",
        message: "User not found, Enter correct details",
      });
    }
    const isMatch = await user.isPasswordCorrect(password);
    if (!isMatch) {
      return res.status(401).json({
        status: "failed",
        message: "Invalid credentials, try again",
      });
    }
    const token = await user.createJwt();
    return res
      .status(200)
      .json({ status: "successful", data: user, token: token });
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ status: "failed", message: "something went wrong" });
  }
};


module.exports = { login, register };
