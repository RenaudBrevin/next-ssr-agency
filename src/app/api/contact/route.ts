'use client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: `Méthode ${req.method} non autorisée.` });
    }
  
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Tous les champs sont requis." });
    }
  
    try {
      const newContact = await prisma.contact.create({
        data: { name, email, message },
      });
  
      return res.status(201).json({ message: "Message envoyé avec succès", contact: newContact });
    } catch (error) {
      console.error("Erreur serveur :", error);
      return res.status(500).json({ error: "Erreur serveur lors de l'envoi du message." });
    }
  }
  