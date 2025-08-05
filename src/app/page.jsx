'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center" style={{ backgroundColor: '#1E1E2F' }}>
      
      {/* HERO SECTION */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20 px-6">
        
        {/* LEFT TEXT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Hi, I’m <span className='text-[#3cb0c9]'>Abdul Hamad</span> <br /> A Web Developer
          </h1>
          <p className="text-lg mb-6 leading-relaxed" style={{ color: '#CCCCCC' }}>
            I design and develop modern, fast, and responsive web apps. Clean code. Seamless UX.
          </p>
          <Link href="/projects">
            <button className="px-4 py-2 border border-transparent rounded-md bg-[#3CB0C9] hover:border-[#3CB0C9] hover:bg-transparent hover:text-[#3CB0C9] transition duration-300">
              View My Work
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/heroImg.png"
              alt="Abdul Hamad"
              width={450}
              height={450}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* WHY WORK WITH ME SECTION */}
      <section className="w-full py-20" style={{ backgroundColor: '#2A2A3C' }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
            Why Work With Me?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#CCCCCC' }}>
            I focus on building high-performance, scalable web apps using modern tools like Next.js, Tailwind CSS, and MongoDB.
            Whether you’re a startup or a growing business, I can bring your ideas to life with code that works and a design that resonates.
          </p>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="w-full py-20 px-6" style={{ backgroundColor: '#1E1E2F' }}>
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#FFFFFF' }}>
            What I Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* CARD 1 */}
          <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#2A2A3C' }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
              Responsive Design
            </h3>
            <p className="text-base" style={{ color: '#CCCCCC' }}>
              I build websites that look great on all devices — mobile, tablet, and desktop — using modern CSS and frameworks.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#2A2A3C' }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
              Fast Performance
            </h3>
            <p className="text-base" style={{ color: '#CCCCCC' }}>
              My apps load fast and perform smoothly thanks to optimization techniques and modern frontend frameworks.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#2A2A3C' }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
              Clean Code
            </h3>
            <p className="text-base" style={{ color: '#CCCCCC' }}>
              I write clean, maintainable code following best practices, making it easier for teams to scale and collaborate.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
