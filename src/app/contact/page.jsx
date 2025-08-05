'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send. Try again later.');
    }
  };

  return (
    <main className="min-h-screen py-20 px-6" style={{ backgroundColor: '#1E1E2F' }}>
      <div className="max-w-xl mx-auto text-center text-[#CCCCCC]">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
        <p className="mb-10">
          Got a project idea or just want to say hello? Fill out the form below and I’ll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block mb-1 text-white">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#2A2A3C] text-white border border-gray-600"
            />
          </div>
          <div>
            <label className="block mb-1 text-white">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#2A2A3C] text-white border border-gray-600"
            />
          </div>
          <div>
            <label className="block mb-1 text-white">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#2A2A3C] text-white border border-gray-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold"
            style={{ backgroundColor: '#3CB0C9', color: '#FFFFFF' }}
          >
            Send Message
          </button>

          {status && (
            <p className="text-center mt-4 text-sm" style={{ color: '#3CB0C9' }}>
              {status}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
