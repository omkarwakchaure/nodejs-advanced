import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./database/db.js";
import bookRoutes from "./routes/book.route.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

connectToMongo();

//api routes
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
