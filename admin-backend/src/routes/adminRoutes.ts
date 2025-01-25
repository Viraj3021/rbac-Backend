import express, { Request, Response, NextFunction } from 'express';
import { authenticateJWT } from '../middleware/authMiddleware';  // Only import from authMiddleware.ts
import { getAllUsers, getUserById, deleteUser, getNotesFromUserBackend } from '../controllers/adminController';
import { adminLogin } from '../controllers/adminController';


// Ensure req.user is recognized in TypeScript
interface AuthenticatedRequest extends Request {
  user?: { id: string; role: string };
}

const router = express.Router();

// Apply authentication middleware to all routes
router.use(authenticateJWT);  // No need to define authenticateJWT here again

// Authorization check to ensure only admins can access these routes
const isAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  if (req.user?.role !== 'admin') {
    res.status(403).json({ message: 'Forbidden: Admin access required' });
    return;
  }
  next();
};

// Define routes with isAdmin middleware for admin-specific routes
router.get('/users', isAdmin, getAllUsers);  // Get all users
router.get('/users/:id', isAdmin, getUserById);  // Get user by ID
router.post('/admin/login', adminLogin);
router.delete('/users/:id', isAdmin, deleteUser);  // Delete user
router.get('/notes', authenticateJWT, getNotesFromUserBackend);  // Get notes from user backend
router.get('user/notes', authenticateJWT, getNotesFromUserBackend);
export default router;
