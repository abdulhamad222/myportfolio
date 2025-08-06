'use client';

import { Code, Bug, Layout, Server } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-20 px-6 text-[#CCCCCC]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-16">
          My <span className="text-[#3CB0C9]">Services</span>
        </h1>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* MERN Stack */}
          <div className="group bg-[#1E1E2F] rounded-2xl p-6 shadow-md hover:shadow-[0_0_20px_#3CB0C9] hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Code className="w-10 h-10 text-[#3CB0C9]" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">MERN Stack</h2>
            <p className="text-sm leading-relaxed">
              Full-stack development using MongoDB, Express, React, and Node.js to build dynamic, scalable web applications.
            </p>
            <a href="#contact">
              <button className="mt-6 px-4 py-2 bg-[#3CB0C9] text-white rounded-lg hover:bg-[#3190a5] transition">
                Let’s Chat
              </button>
            </a>
          </div>

          {/* Bug Handling */}
          <div className="group bg-[#1E1E2F] rounded-2xl p-6 shadow-md hover:shadow-[0_0_20px_#3CB0C9] hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Bug className="w-10 h-10 text-[#3CB0C9]" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Bug Handling</h2>
            <p className="text-sm leading-relaxed">
              Identifying and resolving frontend and backend bugs to ensure your applications run smoothly and efficiently.
            </p>
            <a href="#contact">
              <button className="mt-6 px-4 py-2 bg-[#3CB0C9] text-white rounded-lg hover:bg-[#3190a5] transition">
                Let’s Chat
              </button>
            </a>
          </div>

          {/* Frontend */}
          <div className="group bg-[#1E1E2F] rounded-2xl p-6 shadow-md hover:shadow-[0_0_20px_#3CB0C9] hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Layout className="w-10 h-10 text-[#3CB0C9]" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Frontend Development</h2>
            <p className="text-sm leading-relaxed">
              Crafting modern, responsive, and intuitive UIs using React, Next.js, Tailwind CSS, and more.
            </p>
            <a href="#contact">
              <button className="mt-6 px-4 py-2 bg-[#3CB0C9] text-white rounded-lg hover:bg-[#3190a5] transition">
                Let’s Chat
              </button>
            </a>
          </div>

          {/* Backend */}
          <div className="group bg-[#1E1E2F] rounded-2xl p-6 shadow-md hover:shadow-[0_0_20px_#3CB0C9] hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Server className="w-10 h-10 text-[#3CB0C9]" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Backend Development</h2>
            <p className="text-sm leading-relaxed">
              Building secure and scalable backend systems using Node.js, Express, MongoDB, and RESTful APIs.
            </p>
            <a href="#contact">
              <button className="mt-6 px-4 py-2 bg-[#3CB0C9] text-white rounded-lg hover:bg-[#3190a5] transition">
                Let’s Chat
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
