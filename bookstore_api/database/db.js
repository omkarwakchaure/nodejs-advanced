import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToMongo = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    return response;
  } catch (error) {
    console.log("Error connecting to MongoDB");
    process.exit(1);
  }
};

export default connectToMongo;
