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
