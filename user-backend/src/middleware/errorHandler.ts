import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);  // Log error details
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
};

export default errorHandler;
