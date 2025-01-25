import { Request, Response, NextFunction } from 'express';
import errorHandler from "./errorHandler";

// Validate registration input
export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields',errorHandler: 'Missing required fields' });
  }
  next();
};

// Validate login input
export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing required fields',errorHandler: 'Missing required fields' });
  }
  next();
};