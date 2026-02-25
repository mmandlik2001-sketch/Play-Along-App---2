import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma.js';

const venueSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(3),
  location: z.string().min(2),
  hourlyRate: z.number().positive()
});

export const listVenues = async (_req: Request, res: Response) => {
  const venues = await prisma.venue.findMany({ orderBy: { createdAt: 'desc' } });
  return res.json(venues);
};

export const createVenue = async (req: Request, res: Response) => {
  const parsed = venueSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());

  const venue = await prisma.venue.create({ data: parsed.data });
  return res.status(201).json(venue);
};
