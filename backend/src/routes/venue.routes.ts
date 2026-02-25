import { Router } from 'express';
import { createVenue, listVenues } from '../controllers/venue.controller.js';
import { authMiddleware } from '../middleware/auth.js';

export const venueRouter = Router();

venueRouter.get('/', listVenues);
venueRouter.post('/', authMiddleware, createVenue);
