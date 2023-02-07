require("dotenv").config();
const connectDB = require("./db/connection");
const conn = process.env.MONGO_URL;
const auth = require("./middlewares/authMiddleware");
const authRouter = require("./routes/authRouter");
const hotelRouter = require("./routes/hotelRouter");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/hotel", hotelRouter);

const start = async () => {
  try {
    await connectDB(conn);
    console.log("database connected successfully");
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
