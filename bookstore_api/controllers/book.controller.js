import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Book } from "../models/book.model.js";

const getAllBooks = asyncHandler(async (req, res) => {
  const allBooks = await Book.find({});

  if (!allBooks) {
    throw new ApiError(500, "Failed to fetch books");
  }

  if (allBooks?.length > 0) {
    res
      .status(200)
      .json(new ApiResponse(200, allBooks, "Books fetched successfully"));
  }
});

const getSingleBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    throw new ApiError(404, "Book not found");
  }

  res.status(200).json(new ApiResponse(200, book, "Book fetched successfully"));
});

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

const updateBook = asyncHandler(async (req, res) => {
  const updateBookData = req.body;
  const bookId = req.params.id;
  if (!updateBookData) {
    throw new ApiError(400, "Book data is required");
  }

  const updatedBook = await Book.findByIdAndUpdate(bookId, updateBookData, {
    new: true,
  });

  if (!updatedBook) {
    throw new ApiError(500, "Failed to update book");
  }

  res
    .status(200)
    .json(new ApiResponse(200, updatedBook, "Book updated successfully"));
});

const deleteBook = asyncHandler(async (req, res) => {
  const bookToDelete = await Book.findByIdAndDelete(req.params.id);
  if (!bookToDelete) {
    throw new ApiError(404, "Book not found");
  }
  res
    .status(200)
    .json(new ApiResponse(200, bookToDelete, "Book deleted successfully"));
});

export { getAllBooks, getSingleBook, addNewBook, updateBook, deleteBook };
