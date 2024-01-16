import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("Lamba function is running!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
