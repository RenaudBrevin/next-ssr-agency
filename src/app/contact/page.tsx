import ContactForm from '../../components/02-sections/ContactForm/ContactForm';

export default function ContactPage() {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-6xl font-bold mb-4">Tell us about your <span className="text-gold">project</span></h1>
      <ContactForm />
    </div>
  );
}
