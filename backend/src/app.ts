import cors from 'cors';
import express from 'express';
import { env } from './config/env.js';
import { authRouter } from './routes/auth.routes.js';
import { userRouter } from './routes/user.routes.js';
import { venueRouter } from './routes/venue.routes.js';
import { bookingRouter } from './routes/booking.routes.js';

export const app = express();

app.use(cors({ origin: env.corsOrigin === '*' ? true : env.corsOrigin }));
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/venues', venueRouter);
app.use('/api/bookings', bookingRouter);
