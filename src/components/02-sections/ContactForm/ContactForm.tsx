'use client';

import gsap from 'gsap';
import Image from 'next/image';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { addContact } from '../../../app/actions';
import './Contactform.css';

type FormStep = 'name' | 'email' | 'message' | 'success';

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>('name');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialisation des états de visibilité
    gsap.set([emailRef.current, messageRef.current], {
      opacity: 0,
      x: 100,
      display: 'none'
    });
    gsap.set(successRef.current, {
      opacity: 0,
      scale: 0.8,
      display: 'none'
    });
  }, []);

  const validateField = (step: FormStep): boolean => {
    setError(null);
    switch (step) {
      case 'name':
        if (formData.name.trim().length < 2) {
          setError('Le nom doit contenir au moins 2 caractères');
          return false;
        }
        break;
      case 'email':
        if (!formData.email.includes('@')) {
          setError('Veuillez entrer une adresse email valide');
          return false;
        }
        break;
      case 'message':
        if (formData.message.trim().length < 10) {
          setError('Le message doit contenir au moins 10 caractères');
          return false;
        }
        break;
    }
    return true;
  };

  const showInput = (inputRef: React.RefObject<HTMLDivElement> | null) => {
    if(!inputRef) return;
    gsap.set(inputRef.current, {
      display: 'block',
      x: 50,
      opacity: 0
    });
    gsap.to(inputRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.2
    });
  };

  const handleNext = () => {
    if (currentStep === 'name' && validateField('name')) {
      gsap.to(nameRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.2,
        onComplete: () => {
          gsap.set(nameRef.current, { display: 'none' });
          showInput(emailRef);
        }
      });
      setCurrentStep('email');
    } else if (currentStep === 'email' && validateField('email')) {
      gsap.to(emailRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.2,
        onComplete: () => {
          gsap.set(emailRef.current, { display: 'none' });
          showInput(messageRef);
        }
      });
      setCurrentStep('message');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateField('message')) return;

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      await addContact(formDataToSend);
      setSuccess('Votre message a été envoyé avec succès.');

      // Animation de sortie du formulaire
      gsap.to(messageRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.2,
        onComplete: () => {
          gsap.set(messageRef.current, { display: 'none' });
          // Afficher le message de succès avec une animation
          gsap.set(successRef.current, { display: 'block' });
          gsap.to(successRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        }
      });

      setCurrentStep('success');
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue.');
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setCurrentStep('name');
    setSuccess(null);
    setError(null);

    // Animer la sortie du message de succès
    gsap.to(successRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      onComplete: () => {
        gsap.set(successRef.current, { display: 'none' });
        gsap.set(nameRef.current, {
          display: 'block',
          opacity: 0,
          x: 50
        });
        gsap.to(nameRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.2
        });
      }
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="p-8 rounded-md bg-lightBlack border border-gold min-h-[170px]">
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div ref={nameRef} className="form-step">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Nom"
          className="border p-2 w-full"
        />
        {currentStep === 'name' && (
          <button
            type="button"
            onClick={handleNext}
            className="bg-white flex items-center gap-5 px-5 py-3 text-black font-extrabold rounded-2xl mt-4"
          >
            <span>Suivant</span>
            <Image src="/right-arrow.png" alt="Next" width={15} height={30} priority />
          </button>
        )}
      </div>

      <div ref={emailRef} className="form-step">
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
          className="border p-2 w-full"
        />
        {currentStep === 'email' && (
          <button
            type="button"
            onClick={handleNext}
            className="bg-white flex items-center gap-5 px-5 py-3 text-black font-extrabold rounded-2xl mt-4"
          >
            <span>Suivant</span>
            <Image src="/right-arrow.png" alt="Next" width={15} height={30} priority />
          </button>
        )}
      </div>

      <div ref={messageRef} className="form-step">
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Message"
          className="border p-2 w-full"
        ></textarea>
        {currentStep === 'message' && (
          <button
            type="submit"
            className="bg-white flex items-center gap-5 px-5 py-3 text-black font-extrabold rounded-2xl mt-4"
          >
            <span>Envoyer</span>
            <Image src="/right-arrow.png" alt="Send" width={15} height={30} priority />
          </button>
        )}
      </div>

      <div ref={successRef} className="text-center">
        <p className="text-gold text-lg mb-4">{success}</p>
        <button
          type="button"
          onClick={resetForm}
          className="bg-white flex items-center gap-5 px-5 py-3 text-black font-extrabold rounded-2xl mx-auto"
        >
          <span>Nouveau message</span>
          <Image src="/right-arrow.png" alt="Reset" width={15} height={30} priority />
        </button>
      </div>
    </form>
  );
}