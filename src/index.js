import serverless from "serverless-http";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
const app = express();

app.use(cors());
app.use(async (req, res, next) => {
  if (mongoose.connection.readyState === 0) {
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => {
        console.log("Connected to MongoDB server successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log(
      "Connection already established, reusing the existing connection"
    );
  }
  next();
});

app.get("/", (req, res) => {
  res.json("Lambda function is running!");
});

export const handler = serverless(app);

// app.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });
