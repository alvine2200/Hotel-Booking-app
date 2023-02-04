require("dotenv").config();
const connectDB = require("./db/connectionDB");
const conn = process.env.MONGO_URL;
const router = require("./routes/router");


const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//enable if behind proxy by app.set('trust proxy',1)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, //request per 15minutes
  max: 100, //limit 100 requests to 15minutes
});

app.use(express.json());

app.use("/api/v1/", router);

const start = async (req, res) => {
  try {
    // await connectDB(conn);
    // console.log("database connected successfully");
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
