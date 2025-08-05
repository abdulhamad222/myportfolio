'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);


    const navLinkClass = 'relative group transition duration-300 hover:text-[#3cb0c9]';

  return (
    <nav className="w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Empty Logo Placeholder */}
        <div className="text-xl font-semibold text-white hidden sm:block"></div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12 items-center mx-auto">
          <Link href="/" className={navLinkClass}>
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3cb0c9] transition-all group-hover:w-full" />
           </Link>
          <Link href="/about" className={navLinkClass}>
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3cb0c9] transition-all group-hover:w-full" />
           </Link>
          <Link href="/projects" className={navLinkClass}>
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3cb0c9] transition-all group-hover:w-full" />
           </Link>
          <Link
            href="/contact"
            className="px-4 py-2 border border-transparent rounded-md bg-[#3CB0C9] hover:border-[#3CB0C9] hover:bg-transparent hover:text-[#3CB0C9] transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center mt-4 space-y-8 md:hidden">
          <Link href="/" className={navLinkClass}>
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3cb0c9] transition-all group-hover:w-full" />
           </Link>
          <Link href="/about" className={navLinkClass}>
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3cb0c9] transition-all group-hover:w-full" />
           </Link>
          <Link href="/blog" className={navLinkClass}>
            Blog
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3cb0c9] transition-all group-hover:w-full" />
           </Link>
          <Link
            href="/contact"
            className="px-4 py-2 border border-transparent rounded-md bg-[#3CB0C9] hover:border-[#3CB0C9] hover:bg-transparent hover:text-[#3CB0C9] transition duration-300"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
