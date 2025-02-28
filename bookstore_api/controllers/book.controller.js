import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Book } from "../models/book.model.js";

const getAllBooks = asyncHandler(async (req, res) => {});

const getSingleBook = asyncHandler(async (req, res) => {});

const addNewBook = asyncHandler(async (req, res) => {
  const newBookFormData = req.body;

  if (!newBookFormData) {
    throw new ApiError(400, "Book data is required");
  }

  const newlyCreatedBook = await Book.create(newBookFormData);

  if (!newlyCreatedBook) {
    throw new ApiError(500, "Failed to create book");
  }

  res
    .status(201)
    .json(
      new ApiResponse(201, { newlyCreatedBook }, "Book created successfully")
    );
});

const updateBook = asyncHandler(async (req, res) => {});

const deleteBook = asyncHandler(async (req, res) => {});

export { getAllBooks, getSingleBook, addNewBook, updateBook, deleteBook };
