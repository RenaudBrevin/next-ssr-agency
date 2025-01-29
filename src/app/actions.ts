'use server';

import { prisma } from '@/lib/prisma';

export async function addContact(formData: FormData) {
  const name = formData.get('name')?.toString();
  const email = formData.get('email')?.toString();
  const message = formData.get('message')?.toString();

  if (!name || !email || !message) {
    throw new Error('Tous les champs sont requis.');
  }

  await prisma.contact.create({
    data: { name, email, message },
  });
}

export async function handleAddClient(formData: FormData) {
  const src = formData.get('src')?.toString().trim();
  const alt = formData.get('alt')?.toString().trim();
  const email = formData.get('email')?.toString().trim();

  // Vérification des champs vides
  if (!src || !alt || !email) {
    return { error: 'Tous les champs sont obligatoires.' };
  }

  // Vérification de l'email
  if (!email.includes('@')) {
    return { error: "L'email doit contenir un '@'." };
  }

  // Simulation d'un ajout (tu peux remplacer par un ajout en base de données)
  return { success: true, newClient: { src, alt, email } };
}

