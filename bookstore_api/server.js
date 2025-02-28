import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./database/db.js";
dotenv.config();

const app = express();
app.use(express.json());

connectToMongo();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
