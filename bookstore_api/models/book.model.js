import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
      trim: true,
      maxLength: [100, "Book title cannot exceed 100 characters"],
    },
    author: {
      type: String,
      required: [true, "Author name is required"],
      trim: true,
      maxLength: [50, "Author name cannot exceed 50 characters"],
    },
    year: {
      type: Number,
      required: [true, "Year of publication is required"],
      min: [1600, "Year of publication cannot be less than 1600"],
      max: [
        new Date().getFullYear(),
        "Year of publication cannot be more than the current year",
      ],
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
