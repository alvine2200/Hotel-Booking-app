require("dotenv").config();
const connectDB = require("./db/connection");
const conn = process.env.MONGO_URL;
const router = require("./routes/authRouter");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/", router);

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
