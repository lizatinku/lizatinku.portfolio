import React from 'react';
import Typing from 'react-typing-effect';
import '@fortawesome/fontawesome-free/css/all.min.css';

function TechCard({ stack }) {
  return (
    <div>
      <h4 className="text-3xl font-semibold text-[#FFD700] mb-4">{stack.title}</h4>
      <div className="flex flex-wrap gap-4">
        {stack.items.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-10 h-10"
              title={tech.name}
            />
            <span className="text-sm text-white mt-2">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const techStack = {
    programmingLanguages: {
      title: 'Programming Languages',
      items: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/python.svg' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/c.svg' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/cplusplus.svg' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/html5.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/css3.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/typescript.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg' },
      ],
    },
    frameworks: {
      title: 'Frameworks',
      items: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/react.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/nodedotjs.svg' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/express.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/nextdotjs.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/tailwindcss.svg' },
        { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mui.svg' },
      ],
    },
    developerTools: {
      title: 'Workflow',
      items: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/git.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/docker.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/visualstudiocode.svg' },
        { name: 'Jira', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/jira.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mongodb.svg' },
      ],
    },
  };

  return (
    <section className="p-4 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966] shadow-md rounded-lg border border-gray-300">
      {/* Header and Navigation */}
      <div className="w-full z-10 bg-[#CC9966] p-5">
        <nav className="flex justify-between text-xl">
          <a href="#about-me" className="text-white hover:text-[#4A2C2A]">ABOUT ME</a>
          <a href="#experience" className="text-white hover:text-[#4A2C2A]">EXPERIENCE</a>
          <a href="#projects" className="text-white hover:text-[#4A2C2A]">PROJECTS</a>
          <a href="#outsidecoding" className="text-white hover:text-[#4A2C2A]">LEADERSHIP</a>
        </nav>
      </div>

      <div className="h-16 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966]"></div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center mt-8">
        <div className="bg-black rounded-lg p-1">
          <img 
            src="/newheadshot.jpg" 
            alt="Liza headshot" 
            className="full w-60 h-80 lg:w-72 lg:h-80 object-cover" 
          />
        </div>

        <h1 className="text-5xl lg:text-6xl font-extrabold mt-4">
          Liza Tinku Jose
        </h1>
        
        <h2 className="text-2xl font-semibold">
          <Typing
            cursorRenderer={cursor => <h2>{cursor}</h2>}
            text={['Engineering Tomorrow with a Global Perspective']}
            speed={50}
            eraseDelay={1000}
          />
        </h2>
        
        <div className="flex space-x-4 mt-4">
          <a 
            href="https://github.com/lizatinku" 
            className="text-3xl hover:text-sunsetPink"
            target="_blank" rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/lizatinkujose" 
            className="text-3xl hover:text-sunsetPink"
            target="_blank" rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://drive.google.com/file/d/1BMBNU7m7rLc9NAhk3bI4R79_HA2ifjMV/view?usp=sharing" 
            className="text-3xl hover:text-sunsetPink"
            target="_blank" rel="noreferrer"
          >
            <i className="fas fa-file-alt"></i>
          </a>
        </div>
      </div>

      <div className="h-20 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966]"></div>

      <div id="about-me" className="w-full max-w-6xl mx-auto mt-16 p-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Tech Stack Section */}
        <div className="md:w-1/2">
          <div className="mb-12">
            <TechCard stack={techStack.programmingLanguages} />
          </div>
          <div className="mb-12">
            <TechCard stack={techStack.frameworks} />
          </div>
          <div>
            <TechCard stack={techStack.developerTools} />
          </div>
        </div>

        {/* About Me Section */}
        <div className="md:w-1/2 text-white leading-relaxed font-serif">
          <h2 className="text-3xl font-bold text-[#CC9966] mb-4">ABOUT ME</h2>
          <p className="text-xl mb-4">
            Hi, I'm Liza, a Computer Engineering Junior at UC Davis with a journey spanning India, the UAE, and the USA. These experiences have given me a rich cultural perspective and a strong ability to connect with people from diverse backgrounds.
          </p>
          <p>

          </p>
          <div>

          </div>
          <p className="text-xl mb-4">
            I am passionate about full-stack development and  AI/Machine learning, where I thrive at the intersection of creativity and technology.            
          </p>
          <p className="text-xl mb-4">
            I love creating projects that either solve real-world problems or align with my personal passions, making my work both meaningful and impactful.
          </p>
        </div>
      </div>
    </div>


      <div className="h-40 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966]"></div>
    </section>
  );
}
