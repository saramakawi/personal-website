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
    <section id="contact" className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        <span className="text-blue-600 dark:text-blue-400">06.</span> Get In Touch
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Open to full-stack and frontend opportunities. Drop me a message.
      </p>

      <div className="flex flex-col gap-4 text-left">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-600"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-600"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-600"
        />
        <button
          onClick={handleSubmit}
          disabled={status === 'sending'}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
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

      <p className="text-gray-500 mt-8">
        Or email me directly at{' '}
        <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline">
          {profile.email}
        </a>
      </p>
    </section>
  );
}