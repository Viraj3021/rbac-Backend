import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import userRoutes from './routes/userRoutes';
import noteRoutes from './routes/noteRoutes';
import adminRoutes from './routes/adminRoutes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the User Backend!');
});

app.use('/auth', userRoutes);
app.use('/notes', noteRoutes);
app.use('/admin', adminRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`User Backend running on port ${PORT}`);
});
