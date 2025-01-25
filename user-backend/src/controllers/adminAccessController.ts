import { Request, Response, NextFunction } from 'express';
import Note from '../models/Note';

// Ensure request type includes user property
interface AuthenticatedRequest extends Request {
  user?: { id: string; role: string };
}

// Expose limited notes data to Admin Backend
export const getSharedNotes = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      res.status(403).json({ message: 'Forbidden: Admin access required' });
      return;
    }

    // Return only selected fields (not user-specific details)
    const notes = await Note.find({}, 'title status');
    res.json(notes);
  } catch (error) {
    next(error);
  }
};
