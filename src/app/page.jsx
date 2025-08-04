'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#1E1E2F' }}>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Hi, I’m Abdul Hamad <br /> A Web Developer
          </h1>
          <p className="text-lg mb-6 leading-relaxed" style={{ color: '#CCCCCC' }}>
            I design and develop modern, fast, and responsive web apps. Clean code. Seamless UX.
          </p>
          <Link href="/#projects">
            <button className="px-6 py-3 rounded-xl font-medium transition duration-300" 
              style={{ backgroundColor: '#3CB0C9', color: '#FFFFFF' }}>
              View My Work
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ backgroundColor: '#2A2A3C' }}>
            <Image
              src="/images/IMG_6421.jpg"
              alt="Abdul Hamad"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
