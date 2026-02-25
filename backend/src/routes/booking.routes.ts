import { Router } from 'express';
import { createBooking, listBookings } from '../controllers/booking.controller.js';
import { authMiddleware } from '../middleware/auth.js';

export const bookingRouter = Router();

bookingRouter.get('/', authMiddleware, listBookings);
bookingRouter.post('/', authMiddleware, createBooking);
