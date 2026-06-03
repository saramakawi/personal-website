import { useState } from 'react';
import { profile } from '../data/resume';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Phase 5 will replace this with a real API call
    console.log('Form submitted:', form);
    alert('Thanks! (Backend wiring comes in Phase 5.)');
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        <span className="text-blue-600">06.</span> Get In Touch
      </h2>
      <p className="text-gray-600 mb-8">
        Open to full-stack and frontend opportunities. Drop me a message.
      </p>

      <div className="flex flex-col gap-4 text-left">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </div>

      <p className="text-gray-500 mt-8">
        Or email me directly at{' '}
        <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline">
          {profile.email}
        </a>
      </p>
    </section>
  );
}