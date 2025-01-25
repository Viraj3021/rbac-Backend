import express from 'express';
import { authenticateJWT, authorizeRole } from '../middleware/authMiddleware';  // Importing both middlewares
import { getSharedNotes } from '../controllers/adminAccessController';  // Assuming your controller is set up

const router = express.Router();

// Use the authenticateJWT middleware to protect routes
router.use(authenticateJWT);

// Route to get shared notes, only accessible to 'admin' users
// Apply the authorizeRole middleware only to this specific route
router.get('/notes', authorizeRole('admin'), getSharedNotes);

export default router;
