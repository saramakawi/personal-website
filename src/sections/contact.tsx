// This is the Contact section with a form that submits messages to the backend API.

import { useState } from 'react';
import { profile } from '../data/resume';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  const handleSubmit = async() => {
    setStatus('sending');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="glass-panel p-8 md:p-12">
        <h2 className="section-heading">
          <span className="accent">06.</span> Get In Touch
        </h2>
        <p className="accent mb-8">
          I'm open to new possibilities and opportunities. Let's connect!
        </p>
        <div className="flex flex-col gap-4 text-left">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="input-field"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="input-field"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="input-field"
          />
          <button
            onClick={handleSubmit}
            disabled={status === 'sending'}
            className="px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90 btn-primary"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-600 text-center">Thanks — your message was sent!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
          )}
        </div>
      </div>

      <p className="mt-8 text-center">
        Or email me directly at{' '}
        <a href={`mailto:${profile.email}`} className="accent hover:underline">
          {profile.email}
        </a>
      </p>
    </section>
  );
}