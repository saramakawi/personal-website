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

  const handleSubmit = async() => {
    setStatus('sending');
    try {
      const res = await fetch('http://localhost:3001/api/contact', {
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
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <div className="glass-panel p-8 md:p-12">
        <h2 className="font-display text-3xl font-bold mb-8">
          <span className="accent">06.</span> Get In Touch
        </h2>
        <p className="accent mb-8">
          Open to full-stack and frontend opportunities. Drop me a message.
        </p>
        <div className="flex flex-col gap-4 text-left">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="px-4 py-3 border border-soft rounded-lg focus:outline-none focus:border-teal-400"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="px-4 py-3 border border-soft rounded-lg focus:outline-none focus:border-teal-400"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="px-4 py-3 border border-soft rounded-lg focus:outline-none focus:border-teal-400"
          />
          <button
            onClick={handleSubmit}
            disabled={status === 'sending'}
            className="px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}
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