import { Request, Response } from 'express';
import { prisma } from '../config/prisma.js';

export const getUsers = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany({ select: { id: true, email: true, name: true, role: true, createdAt: true } });
  return res.json(users);
};
