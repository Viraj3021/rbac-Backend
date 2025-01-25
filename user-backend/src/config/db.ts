import mongoose from 'mongoose';
import dotenv from 'dotenv';
import errorHandler from "../middleware/errorHandler";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '');
    console.log('Connected to MongoDB (User Backend)');
  } catch (error) {
    console.error('MongoDB connection error (User Backend):', errorHandler);
    process.exit(1);
  }
};
