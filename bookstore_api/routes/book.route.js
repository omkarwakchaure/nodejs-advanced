import express from "express";
import {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";

//create express router
const router = express.Router();

//all routes related to book
router.get("/book", getAllBooks);
router.get("/book/:id", getSingleBook);
router.post("/add", addNewBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

export default router;