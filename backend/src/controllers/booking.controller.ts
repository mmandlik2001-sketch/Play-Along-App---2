import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma.js';
import { AuthedRequest } from '../middleware/auth.js';

const bookingSchema = z.object({
  venueId: z.string().min(1),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date()
});

export const listBookings = async (_req: Request, res: Response) => {
  const bookings = await prisma.booking.findMany({ include: { user: true, venue: true }, orderBy: { createdAt: 'desc' } });
  return res.json(bookings);
};

export const createBooking = async (req: AuthedRequest, res: Response) => {
  const parsed = bookingSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());
  if (!req.userId) return res.status(401).json({ message: 'Unauthorized' });

  const booking = await prisma.booking.create({ data: { ...parsed.data, userId: req.userId } });
  return res.status(201).json(booking);
};
