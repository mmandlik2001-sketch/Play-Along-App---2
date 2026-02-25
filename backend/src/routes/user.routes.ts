import { Router } from 'express';
import { getUsers } from '../controllers/user.controller.js';
import { authMiddleware } from '../middleware/auth.js';

export const userRouter = Router();

userRouter.get('/', authMiddleware, getUsers);
