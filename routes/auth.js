import express from 'express';

import { registerUsers, loginUsers } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', registerUsers);
router.post('/login', loginUsers);

export default router;