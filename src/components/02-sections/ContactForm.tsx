'use client';

import { useState, FormEvent } from 'react';
import { addContact } from '../../app/actions';

export default function ContactForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(event.currentTarget);

    try {
      await addContact(formData);
      setSuccess('Votre message a été envoyé avec succès.');
      event.currentTarget.reset();
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md">
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <input
        type="text"
        name="name"
        placeholder="Nom"
        className="border p-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border p-2 w-full"
      />
      <textarea
        name="message"
        placeholder="Message"
        className="border p-2 w-full"
      ></textarea>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Envoyer
      </button>
    </form>
  );
}
