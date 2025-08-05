'use client';

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20 px-6" style={{ backgroundColor: '#1E1E2F' }}>
      <div className="max-w-4xl mx-auto text-[#CCCCCC] space-y-16">

        {/* HEADER */}
        <section>
          <h1 className="text-4xl font-bold mb-4 text-white">About Me</h1>
          <p className="text-lg leading-relaxed">
            I'm <strong className="text-white">Abdul Hamad</strong>, a passionate and dedicated web developer focused on building clean, responsive, and high-performance websites and web applications. 
            I specialize in <span className="text-white">JavaScript</span>, <span className="text-white">React</span>, and <span className="text-white">Next.js</span>, and enjoy solving real-world problems with efficient code and great UI/UX.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I started my journey with a strong desire to create things for the web and quickly grew into a full-stack mindset, currently focusing on frontend design and backend integration using tools like <span className="text-white">MongoDB</span>, <span className="text-white">Express</span>, and cloud technologies.
          </p>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-white">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 list-disc list-inside">
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React & Next.js</li>
            <li>Tailwind CSS</li>
            <li>MongoDB</li>
            <li>REST APIs</li>
            <li>Firebase Auth</li>
            <li>Responsive Design</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        {/* TOOLS */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-white">Tools & Technologies I Use</h2>
          <p className="text-lg leading-relaxed">
            I’m comfortable working with a wide range of modern tools and libraries, including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            <div className="bg-[#2A2A3C] rounded-lg p-4 text-center">VS Code</div>
            <div className="bg-[#2A2A3C] rounded-lg p-4 text-center">GitHub</div>
            <div className="bg-[#2A2A3C] rounded-lg p-4 text-center">Postman</div>
            <div className="bg-[#2A2A3C] rounded-lg p-4 text-center">Figma</div>
            <div className="bg-[#2A2A3C] rounded-lg p-4 text-center">MongoDB Atlas</div>
            <div className="bg-[#2A2A3C] rounded-lg p-4 text-center">Vercel</div>
            <div className="bg-[#2A2A3C] rounded-lg p-4 text-center">Firebase</div>
            <div className="bg-[#2A2A3C] rounded-lg p-4 text-center">Linux/WSL</div>
          </div>
        </section>

        {/* VISION / GOALS */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-white">Career Vision</h2>
          <p className="text-lg leading-relaxed">
            My goal is to become a top-tier full-stack developer who can build scalable, secure, and innovative products that make an impact. 
            I aim to work with startups and established companies on meaningful projects and eventually launch my own SaaS products or tools that help businesses grow.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I’m constantly learning, improving, and staying updated with the latest trends in web development and technology.
          </p>
        </section>

        {/* PERSONAL */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-white">Beyond Coding</h2>
          <p className="text-lg leading-relaxed">
            When I’m not coding, I love reading about tech innovations, exploring UI/UX designs, and contributing to open-source projects. 
            I also enjoy photography, gaming, and spending time with family and friends.
          </p>
        </section>

      </div>
    </main>
  );
}
