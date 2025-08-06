'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
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
      setForm({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } else {
      setStatus('Failed to send. Try again later.');
    }
  };

  return (
    <main className="min-h-screen py-20 px-6 text-[#CCCCCC]">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
        <p className="mb-10">
          Got a project idea or just want to say hello? Fill out the form below and I’ll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#2A2A3C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3CB0C9]"
            />
          </div>

          {/* Email Address */}
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#2A2A3C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3CB0C9]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number (with country code)"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#2A2A3C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3CB0C9]"
            />
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              name="subject"
              required
              placeholder="Email Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#2A2A3C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3CB0C9]"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#2A2A3C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3CB0C9]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold transition duration-300 bg-[#3CB0C9] hover:bg-[#3190a5] text-white"
          >
            Send Message
          </button>

          {/* Status */}
          {status && (
            <p className="text-center mt-4 text-sm text-[#3CB0C9]">
              {status}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
