'use client';

import Link from 'next/link';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full px-6 pt-12 pb-8" style={{ backgroundColor: '#2A2A3C' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-[#CCCCCC]">

        {/* Brand / Logo Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
            Abdul Hamad
          </h2>
          <p className="text-sm">
            Passionate Web Developer building modern and scalable applications using Next.js and Tailwind CSS.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#FFFFFF' }}>
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#3CB0C9]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#3CB0C9]">About</Link></li>
            <li><Link href="/projects" className="hover:text-[#3CB0C9]">Project</Link></li>
            <li><Link href="/contact" className="hover:text-[#3CB0C9]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#FFFFFF' }}>
            Get in Touch
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <a href="mailto:your@email.com" className="hover:text-[#3CB0C9]">your@email.com</a>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Lahore, Pakistan</span>
            </li>
            <li className="flex items-center space-x-4 mt-4">
              <a href="https://github.com/yourusername" target="_blank" className="hover:text-[#3CB0C9]">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-[#3CB0C9]">
                <Linkedin size={20} />
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-[#3CB0C9] mt-10 pt-6 text-center text-sm" style={{ color: '#CCCCCC' }}>
        &copy; {new Date().getFullYear()} Abdul Hamad. All rights reserved.
      </div>
    </footer>
  );
}
