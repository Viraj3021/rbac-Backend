import { Request, Response, NextFunction , RequestHandler} from 'express';
import User from '../models/User';
import AuditLog from '../models/AuditLog';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const USER_BACKEND_URL = process.env.USER_BACKEND_URL || 'http://localhost:3001';

interface AuthenticatedRequest extends Request {
  user?: { id: string; role: string };
}


export const adminLogin = async (req: Request, res: Response): Promise<void> => {

  try {
    const { email, password } = req.body;

    // Find admin user in database
    const user = await User.findOne({ email});

    if (!user || user.role !== 'admin') {
       res.status(403).json({ message: 'Access denied. Admin only.' });
       return;
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(email, user.password);
    if (!isMatch) {
       res.status(400).json({ message: 'Invalid credentials' });
       return;
    }

    // Generate a token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || 'your_secret_key',
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
export const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await User.find({}, 'name email role');
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
       res.status(404).json({ message: 'User not found' });
       return;
    
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
       res.status(404).json({ message: 'User not found' });
       return;
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const getNotesFromUserBackend: RequestHandler = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      res.status(403).json({ message: 'Forbidden: Admin access required' });
      return;
    }

    // Make a secure API request to User Backend
    const response = await axios.get(`${process.env.USER_BACKEND_URL}/admin/notes`, {
      headers: { Authorization: req.headers.authorization },
    });

    // Log the admin action
    const auditLog = new AuditLog({
      adminId: req.user.id,
      action: 'Fetched notes from User-Backend',
    });
    await auditLog.save();

    res.json(response.data);
  } catch (error) {
    next(error);
  }
};

export const logAuditAction = async (adminId: string, action: string, affectedUserId?: string, details?: string) => {
  try {
    const log = new AuditLog({
      action,
      adminId,
      affectedUserId,
      details,
    });
    await log.save();
  } catch (error) {
    console.error('Error logging audit action:', error);
  }
};