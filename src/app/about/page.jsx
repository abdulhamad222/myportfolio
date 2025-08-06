'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-8 bg-[#2A2A3C] text-[#CCCCCC]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          About <span className="text-[#3CB0C9]">Me</span>
        </h1>

        {/* Image + Text Section */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-10">
          {/* Image */}
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-[#3CB0C9] shadow-[0_0_50px_#3CB0C9] hover:shadow-none transition-all duration-500">
            <Image
              src="/images/about.png"
              alt="Abdul Hamad"
              width={250}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-base md:text-lg leading-relaxed">
            <p>
              Hello! I’m <span className="text-white font-semibold">Abdul Hamad</span>, a passionate web developer with a love for building intuitive and responsive digital experiences.
              I specialize in crafting dynamic web apps using <span className="text-white">JavaScript</span>, <span className="text-white">React</span>, and <span className="text-white">Next.js</span>.
              My mission is to deliver elegant and efficient solutions that solve real-world problems.
            </p>
            <p className="mt-4">
              I started coding with a dream to turn ideas into reality. Over time, I’ve learned the power of clean design, scalable code, and great user experience.
              Whether it’s a small business website or a full-stack SaaS app, I’m all about attention to detail and continual improvement.
              Outside of coding, I enjoy learning new technologies, contributing to open-source, and staying updated with the latest in web development.
            </p>
          </div>
        </section>

        {/* Timeline/Story Section */}
        <p className="text-base md:text-lg leading-relaxed text-[#CCCCCC]">
          I began my web development journey on YouTube around a year ago. During this time, I learned the fundamentals of <span className="text-white">HTML</span>, <span className="text-white">CSS</span>, <span className="text-white">JavaScript</span>, and responsive web design. I also created logic-based projects such as a calculator, a to-do app, and a rock-paper-scissors game using <span className="text-white">Math.random</span>.
          <br /><br />
          After gaining confidence, I joined an institute to dive into backend development. I enrolled on <span className="text-white">December 16</span> and completed the course on <span className="text-white">July 9</span>. As part of the program, I also did an internship where I learned bug handling and was introduced to <span className="text-white">cybersecurity</span> basics.
          <br /><br />
          I successfully completed the course and received my certificate on <span className="text-white">August 9</span>.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Link href="#contact">
            <button className="px-5 py-2 border border-[#3CB0C9] hover:border-transparent rounded-md hover:bg-[#3CB0C9] text-[#3CB0C9] hover:text-white transition duration-300">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
