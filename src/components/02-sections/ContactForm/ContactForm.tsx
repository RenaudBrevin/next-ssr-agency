'use client';

import { useState, FormEvent } from 'react';
import { addContact } from '../../../app/actions';
import Image from 'next/image';
import './Contactform.css';

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
      <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-md bg-lightBlack border border-gold">
        {success && <p className="text-green-500">{success}</p>}
        <div className="flex gap-4">
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
        </div>
        <textarea
          name="message"
          placeholder="Message"
          className="border p-2 w-full"
        ></textarea>
        <button type="submit" className="bg-white flex items-center gap-5 px-5 py-3 text-black font-extrabold rounded-2xl mt-12 ml-atuo">
          <span>Send</span>
          <Image
          className=""
          src="/right-arrow.png"
          alt="Next.js logo"
          width={15}
          height={30}
          priority
        />
        </button>
      </form>
  );
}
