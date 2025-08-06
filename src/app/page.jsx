'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import AboutPage from './about/page';
import ServicesPage from './services/page';
import ProjectsPage from './projects/page';
import ContactPage from './contact/page';

export default function Home() {
  return (
    <main className="flex flex-col justify-center">

      {/* HERO SECTION */}
      <section className="min-h-screen w-full flex items-center justify-center px-6 bg-[#1E1E2F]" id='home'>
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT SIDE */}
          <div>
            <h1 className="text-4xl md:text-4xl font-bold mb-6 text-white">
              Hi, I’m <span className='text-[#3cb0c9]'>Abdul Hamad</span> <br /> A Web Developer <span className='text-[#3cb0c9] text-2xl'> MERN Stack. </span>
            </h1>
            <p className="text-md mb-6 leading-relaxed text-[#CCCCCC]">
              I design and develop modern, fast, and responsive web apps. Clean code. Seamless UX. This is my passion and I love to develop ideas into web apps.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-3 mt-4 mb-6">
              <a
                href="https://github.com/abdulhamad222"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full border border-[#3CB0C9] shadow-[0_0_20px_#3CB0C9] hover:bg-[#3CB0C9] hover:shadow-none transition duration-300"
              >
                <Github className="text-white" size={20} />
              </a>

              <a
                href="https://linkedin.com/in/abdul-hamad-8a3195333/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full border border-[#3CB0C9] shadow-[0_0_20px_#3CB0C9] hover:bg-[#3CB0C9] hover:shadow-none transition duration-300"
              >
                <Linkedin className="text-white" size={20} />
              </a>

              <a
                href="https://mail.google.com/mail/u/abdulhamad373"
                aria-label="Email"
                className="p-3 rounded-full border border-[#3CB0C9] shadow-[0_0_20px_#3CB0C9] hover:bg-[#3CB0C9] hover:shadow-none transition duration-300"
              >
                <Mail className="text-white" size={20} />
              </a>
            </div>

            {/* Buttons */}
            <div className="mb-6">
              <Link href="#projects">
                <button className="px-4 py-2 border border-transparent rounded-md bg-[#3CB0C9] hover:border-[#3CB0C9] hover:bg-transparent hover:text-[#3CB0C9] transition duration-300">
                  View My Work
                </button>
              </Link>
              <Link href="#contact">
                <button className="px-4 py-2 ml-2 border border-[#3CB0C9] hover:border-transparent rounded-md hover:bg-[#3CB0C9] text-[#3CB0C9] hover:text-white transition duration-300">
                  Hire Me
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE SIDE */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/home.webp"
                alt="Abdul Hamad"
                width={450}
                height={450}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ABOUT */}
      <section id="about" className="min-h-screen w-full px-6 py-16 bg-[#2A2A3C] text-white">
        <AboutPage />
      </section>

      {/* SECTION: SERVICES */}
      <section id="services" className="min-h-screen w-full px-6 py-16 bg-[#1E1E2F] text-white">
        <ServicesPage />
      </section>

      {/* SECTION: PROJECTS */}
      <section id="projects" className="min-h-screen w-full px-6 py-16 bg-[#2A2A3C] text-white">
        <ProjectsPage />
      </section>

      {/* SECTION: CONTACT */}
      <section id="contact" className="min-h-screen w-full px-6 py-16 bg-[#1E1E2F] text-white">
        <ContactPage />
      </section>
    </main>
  );
}
