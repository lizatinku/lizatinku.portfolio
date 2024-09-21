import React from 'react';
import Typing from 'react-typing-effect';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-sunsetRed via-sunsetOrange to-sunsetYellow min-h-screen flex flex-col">
      <div className="fixed top-0 right-0 w-full z-10 backdrop-blur-lg bg-black/70 p-2 shadow-lg">
        <nav className="flex justify-end space-x-6 pr-6">
          <a href="#about-me" className="text-white hover:text-sunsetPink">ABOUT ME</a>
          <a href="#projects" className="text-white hover:text-sunsetPink">PROJECTS</a>
          <a href="#leadership" className="text-white hover:text-sunsetPink">LEADERSHIP</a>
          <a href="#public-speaking" className="text-white hover:text-sunsetPink">PUBLIC SPEAKING</a>
        </nav>
      </div>

      <div className="w-full text-center py-8 bg-gradient-to-r from-sunsetRed via-sunsetOrange to-sunsetYellow">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-white px-20 py-10">
          Liza Tinku Jose
        </h1>
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-8">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6">
          <img 
            src="/headshot.jpg" 
            alt="Liza pic" 
            className="rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover mb-4 lg:mb-6" 
          />

          <h1 className="text-3xl font-bold text-white text-center lg:text-left lg:ml-4 py-16">
            <Typing
              cursorRenderer={cursor => <h1>{cursor}</h1>}
              text={['Engineering Tomorrow with a Global Perspective']}
              speed={50}
              eraseDelay={1000}
            />
          </h1>
          
          <div className="flex justify-center lg:justify-start space-x-4">
            <a 
              href="https://github.com/lizatinku" 
              className="text-white text-3xl hover:text-sunsetPink"
              target="_blank" rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/lizatinkujose" 
              className="text-white text-3xl hover:text-sunsetPink"
              target="_blank" rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://docs.google.com/document/d/1tQh9PITq3axS_uTvzQk3gB1ec4hgXqb5mAS8xEXwoiE/edit?usp=sharing" 
              className="text-white text-3xl hover:text-sunsetPink"
              target="_blank" rel="noreferrer"
            >
              <i className="fas fa-file-alt"></i>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6">
          <div id="about-me" className="text-left space-y-4">
            <h2 className="text-3xl font-bold mb-6">ABOUT ME</h2>
            <p className="text-lg">
              Hi, I'm Liza, a Computer Engineering Junior at UC Davis with a journey spanning India, the UAE, and the USA. These experiences have given me a rich cultural perspective and a strong ability to connect with people from diverse backgrounds.
            </p>
            <p className="text-lg">
              I am passionate about full-stack development and machine learning, where I thrive at the intersection of creativity and technology. Currently, I'm diving into the MERN stack to build dynamic, scalable applications that prioritize both user experience and performance.
            </p>
            <p className="text-lg">
              I love creating projects that either solve real-world problems or align with my personal passions, making my work both meaningful and impactful. Driven by curiosity and a desire to innovate, I’m eager to apply my skills to build forward-thinking solutions that make a difference.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
