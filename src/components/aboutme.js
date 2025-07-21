import React, { useCallback } from 'react';
import Typing from 'react-typing-effect';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "#000" },
          particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            size: { value: 2 },
            move: { enable: true, speed: 0.5, direction: "bottom" },
          },
        }}
      />

      {/* HERO SECTION */}
      <div className="flex flex-col items-center justify-center text-center min-h-screen space-y-6 px-4">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight flex items-center justify-center gap-3">
          <span className="text-gray-400 text-2xl md:text-3xl lg:text-4xl">Hi, I'm</span>
          <span className="text-pink-400 text-7xl lg:text-7xl font-bold">|</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 tracking-widest">
            LIZA TINKU
          </span>
        </h1>

        <h2 className="text-lg md:text-2xl text-gray-300 max-w-xl">
          <Typing
            text={['Engineering Tomorrow with a Global Perspective']}
            speed={50}
            eraseDelay={999999}
          />
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="#projects"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 hover:shadow-blue-500/50 transition duration-200"
          >
            View Projects
          </a>
          <a
            href="#experience"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 hover:shadow-blue-500/50 transition duration-200"
          >
            View Experience
          </a>
        </div>
      </div>

      {/* ABOUT ME SECTION */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-20 mb-32 gap-10 px-6 max-w-6xl mx-auto text-center lg:text-left">
        <img
          src="/newheadshot.jpg" 
          alt="Liza Tinku"
          className="w-60 h-60 object-cover rounded-2xl grayscale hover:grayscale-0 transition duration-300"
        />

        <div className="max-w-2xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            I'm <span className="text-pink-400">Liza Tinku</span>, a Full Stack Developer building scalable digital tools for impact.
          </h2>

          <p className="text-gray-300">
            I’m currently pursuing BSc Computer Engineering at UC Davis. I am passionate about full stack development, production engineering and AI/ML.  I love turning fuzzy ideas into powerful digital experiences.
          </p>

          <p className="text-gray-300">
            In summer 2025, I was selected for the Meta-MLH Production Engineering Fellowship (2.5% acceptance rate), and interned at a med-tech startup building tools for patients and providers using Prisma ORM, S3, and Cognito.
          </p>

          <p className="text-gray-300">
            I love tinkering with React, React Native, Python (Flask/FastAPI), Firebase/Supabase. Outside of coding, I love running, exploring cafes, cooking and hanging out with friends.
          </p>

          <div className="flex justify-center gap-6 pt-2">
            <a
              href="https://www.linkedin.com/in/lizatinkujose"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center"
            >
              <i className="fab fa-linkedin text-white text-2xl group-hover:text-blue-400 transition"></i>
              <span className="absolute top-8 mt-2 px-2 py-1 text-sm rounded bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                LinkedIn
              </span>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lizatj2017@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center"
            >
              <i className="fas fa-envelope text-white text-2xl group-hover:text-red-400 transition"></i>
              <span className="absolute top-8 mt-2 px-2 py-1 text-sm rounded bg-red-600 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                Email
              </span>
            </a>

            <a
              href="https://github.com/lizatinku"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center"
            >
              <i className="fab fa-github text-white text-2xl group-hover:text-gray-300 transition"></i>
              <span className="absolute top-8 mt-2 px-2 py-1 text-sm rounded bg-gray-700 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                GitHub
              </span>
            </a>
          </div>

        </div>
      </div>


  {/* TECH STACK */}
  <div className="w-full max-w-6xl mx-auto mt-32 px-6 text-white font-light text-center">
    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10">
      Technical Skills
    </h2>

    {[
      {
        title: "Frontend",
        items: [
          { name: "React.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
          { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        ]
      },
      {
        title: "Backend & Database",
        items: [
          { name: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
          { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
          { name: "Supabase", src: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
        ]
      },
      {
        title: "Tools & Libraries",
        items: [
          { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
          { name: "Jira", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
          { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
          { name: "PyTorch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
          { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
          { name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
          { name: "Scikit-Learn", src: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" },
        ]
      }
    ].map((section) => (
      <div key={section.title} className="mb-12">
        <h3 className="text-gray-400 font-medium uppercase mb-6 tracking-wide">{section.title}</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {section.items.map((tech) => (
            <div key={tech.name} className="group flex flex-col items-center hover:scale-110 transition-transform duration-200 w-24">
              <img src={tech.src} alt={tech.name} className="w-9 h-9 object-contain" />
              <span className="mt-2 text-sm text-gray-300 font-medium group-hover:text-white text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>

    </section>
  );
}
 