import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import adminRoutes from './routes/adminRoutes';
import authRoutes from './routes/adminRoutes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Admin Backend!');
});

// Use admin routes
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes); 

app.use(errorHandler);

connectDB();

app.listen(PORT, () => {
  console.log(`Admin Backend running on port ${PORT}`);
});
