import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    const newContact = await prisma.contact.create({
      data: { name, email, message },
    });

    return NextResponse.json({ message: "Message envoyé avec succès", contact: newContact }, { status: 201 });
  } catch (error) {
    console.error("Erreur serveur :", error);
    return NextResponse.json({ error: "Erreur serveur lors de l'envoi du message." }, { status: 500 });
  }
}
