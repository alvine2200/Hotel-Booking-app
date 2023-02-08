require("dotenv").config();
const connectDB = require("./db/connection");
const conn = process.env.MONGO_URL;
const auth = require("./middlewares/authMiddleware");
const authRouter = require("./routes/authRouter");
const hotelRouter = require("./routes/hotelRouter");
const userRouter = require("./routes/userRouter");
const roomRouter = require("./routes/roomRouter");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", auth, userRouter);
app.use("/api/v1/hotel", auth, hotelRouter);
app.use("/api/v1/room", auth, roomRouter);

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
