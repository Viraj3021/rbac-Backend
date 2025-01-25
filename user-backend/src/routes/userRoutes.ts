import express from 'express';
import { registerUser, loginUser } from '../controllers/userController';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// Simple test route
router.get('/', (req, res) => {
    res.send('Hello from user routes');
});

// Example profile route
router.get('/profile', (req, res) => {
    res.send('This is the user profile page');
});

export default router;
