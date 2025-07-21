import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "PartyPal – HackDavis 2025",
    description: "Live, map-based mobile app that helps students safely navigate their social lives with real-time data on events, ERs, Narcan pickup, and SafeRide services.",
    techStack: "React Native, Supabase, Google Maps API, Expo, Tailwind CSS",
    imgSrc: "/partypal.png",
    githubLink: "https://github.com/lizatinku/HackDavis25-PartyPal.git",
  },
  {
    title: "PhishFilter – UC Berkeley AI Hackathon",
    description: "Full-stack AI app to detect phishing emails and scam calls in real-time.",
    techStack: "Claude Opus 4, FastAPI, React Native, Vapi, Tailwind CSS",
    imgSrc: "/phishfilter.png",
    githubLink: "https://github.com/lizatinku/BerkAI25-PhishFilter.git",
  },
  {
    title: "Indian Food Trivia",
    description: "A fun, interactive quiz that celebrates the vibrant diversity of Indian cuisine.",
    techStack: "Next.js, Supabase, TypeScript, Tailwind CSS",
    imgSrc: "/pic%20food%20trivia.png",
    githubLink: "https://github.com/lizatinku/food-trivia",
  },
    {
    title: "F1 Race Predictor",
    description: "F1 Race Predictor uses machine learning to forecast Formula 1 race outcomes based on qualifying times, track data, and past performance.",
    techStack: "FastF1 API, React, Flask",
    imgSrc: "/f1.png",
    githubLink: "https://github.com/lizatinku/AISCSpring25-F1predictor.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold">Projects</h2>
        <p className="text-gray-400 mt-4">Some of the things I’ve built.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition duration-300"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-full object-contain p-4 transition duration-300"
              />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <p className="text-gray-500 text-sm">
                <span className="font-semibold text-gray-400">Tech Stack:</span> {project.techStack}
              </p>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-4 py-2 mt-2 border border-gray-700 rounded-full hover:bg-white hover:text-black transition"
              >
                <FaGithub className="text-lg" />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
