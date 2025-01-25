import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '');
    console.log('Connected to MongoDB (Admin Backend)');
  } catch (error) {
    console.error('MongoDB connection error (Admin Backend):', error);
    process.exit(1);
  }
};
