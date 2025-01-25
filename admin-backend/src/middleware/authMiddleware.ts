import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
  user?: { id: string; role: string };
}

export const authenticateJWT = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
   res.status(401).json({ message: 'Access Denied' });
   return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key') as JwtPayload;

    // Ensure decoded token contains id and role
    if (typeof decoded === 'object' && decoded.id && decoded.role) {
      req.user = { id: decoded.id as string, role: decoded.role as string };
      next();
    } else {
       res.status(401).json({ message: 'Invalid token structure' });
       return;
    }
  } catch (err) {
     res.status(403).json({ message: 'Invalid Token' });
     return;
  }
};
