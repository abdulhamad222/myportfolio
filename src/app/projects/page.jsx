'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Banking Web App',
    description:
      'A modern digital banking platform with authentication, real-time transactions, loan management, and billing system using Next.js and MongoDB.',
    image: '/images/projects/bank.png',
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    github: 'https://github.com/abdulhamad222/digitalbank',
  },
  {
    title: 'Task Manager',
    description:
      'A fully functional task management system with user authentication, real-time chat, notifications, and reporting features.',
    image: '/images/projects/taskmanager.png',
    technologies: ['Next.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/abdulhamad222/taskmanagements',
  },
  {
    title: 'Portfolio Website',
    description:
      'This very portfolio website built with a custom design, showcasing my work, skills, and projects in a dark modern UI.',
    image: '/images/projects/portfolio.png',
    technologies: ['Next.js', 'Tailwind CSS'],
    demo: '/',
    github: 'https://github.com/abdulhamad222/myportfolio',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto text-[#CCCCCC]">
        
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">My <span className='text-[#3CB0C9]'>Projects</span></h1>
          <p className="text-lg">
            Here are some of the projects I’ve worked on — built with modern technologies and a focus on clean design & functionality.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_20px_#3CB0C9] transition-all duration-500" style={{ backgroundColor: '#2A2A3C' }}>
              <div className="w-full h-48 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#3CB0C9] text-white rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link href={project.github} target="_blank" className="text-[#3CB0C9] hover:underline">
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
