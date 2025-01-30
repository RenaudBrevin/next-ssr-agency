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

  if (!src || !alt || !email) {
    return { error: 'Tous les champs sont obligatoires.' };
  }

  if (!email.includes('@')) {
    return { error: "L'email doit contenir un '@'." };
  }

  return { success: true, newClient: { src, alt, email } };
}

export async function getProjects() {
  return prisma.project.findMany({
      include: {
          projectDetails: true
      }
  });
}

export async function getProjectById(id: number) {
  return prisma.project.findUnique({
      where: { id },
      include: {
          projectDetails: true
      }
  });
}

