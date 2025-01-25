import express from 'express';
import { authenticateJWT } from '../middleware/authMiddleware';
import { getNotes, createNote, updateNote, deleteNote } from '../controllers/noteController';

const router = express.Router();

// Use the authentication middleware for all routes in this router
router.use(authenticateJWT);

// Route handlers
router.get('/', getNotes);
router.post('/create', createNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;
