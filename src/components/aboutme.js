import React from 'react';
import Typing from 'react-typing-effect';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Hero() {
  return (
    <section className="p-4 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966] shadow-md rounded-lg border border-gray-300">
      <div className="w-full z-10 bg-[#CC9966] p-5">
      <nav className="flex justify-between text-xl">
          <a href="#about-me" className="text-white hover:text-[#4A2C2A]">ABOUT ME</a>
          <a href="#experience" className="text-white hover:text-[#4A2C2A]">EXPERIENCE</a>
          <a href="#projects" className="text-white hover:text-[#4A2C2A]">PROJECTS</a>
          <a href="#outsidecoding" className="text-white hover:text-[#4A2C2A]">LEADERSHIP</a>
        </nav>
      </div>

      <div className="h-16 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966]"></div>

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
            href="https://docs.google.com/document/d/1s4p1DdNPz8nfKpn86VLOeRN1rnNoVjDsF0J-RLE_2Ig/edit?usp=sharing" 
            className="text-3xl hover:text-sunsetPink"
            target="_blank" rel="noreferrer"
          >
            <i className="fas fa-file-alt"></i>
          </a>
        </div>
      </div>

      <div className="h-40 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966]"></div>

      <div id="about-me" className="w-full max-w-3xl mx-auto text-center mt-16 p-6 text-white leading-relaxed">
        <h2 className="text-3xl font-bold text-[#CC9966] mb-4">ABOUT ME</h2>
        <p className="text-lg mb-4">
          Hi, I'm Liza, a Computer Engineering Junior at UC Davis with a journey spanning India, the UAE, and the USA. These experiences have given me a rich cultural perspective and a strong ability to connect with people from diverse backgrounds.
        </p>
        <p className="text-lg mb-4">
          I am passionate about full-stack development and machine learning, where I thrive at the intersection of creativity and technology. Currently, I'm diving into the MERN stack to build dynamic, scalable applications that prioritize both user experience and performance.
        </p>
        <p className="text-lg">
          I love creating projects that either solve real-world problems or align with my personal passions, making my work both meaningful and impactful. Driven by curiosity and a desire to innovate, I’m eager to apply my skills to build forward-thinking solutions that make a difference.
        </p>
      </div>
      <div className="h-40 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966]"></div>
    </section>
  );
}
