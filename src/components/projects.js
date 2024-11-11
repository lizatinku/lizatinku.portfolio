import React from 'react';
import { FaGithub } from 'react-icons/fa';
import * as Tooltip from '@radix-ui/react-tooltip';

const projects = [
  {
    title: "Expense Tracker",
    description: "Managing money can be a hassle, especially for college students juggling multiple responsibilities. This app aims to simplify financial management, offering valuable insights and a user-friendly experience to make managing your money easier.",
    techStack: "HTML, CSS, JavaScript, React.js",
    imgSrc: "/pic%20expense%20tracker.png",
    githubLink: "https://github.com/lizatinku/expense-tracker",
  },
  {
    title: "Flight Price Predictor",
    description: "This project aims to predict flight prices in India using logistic regression on a dataset sourced from Kaggle, originally gathered from the 'Ease My Trip' website.",
    techStack: "Python, Pandas, Numpy, Seaborn, Matplotlib",
    imgSrc: "/airline.jpg",
    githubLink: "https://github.com/lizatinku/ML-Flight-price-predictor.git",
  },
  {
    title: "Indian Food Trivia",
    description: "Indian Food fills both my stomach and my heart. The 'Indian Food Trivia' project is designed to celebrate the vibrant and diverse flavors of Indian food through an engaging and interactive quiz format.",
    techStack: "HTML, TailwindCSS, JavaScript, Typescript, Next.js",
    imgSrc: "/pic%20food%20trivia.png",
    githubLink: "https://github.com/lizatinku/food-trivia",
  },
  {
    title: "Twitter Sentiment Analysis",
    description: "This project involves analyzing the sentiment of Twitter tweets using the Sentiment140 dataset. The goal was to understand the emotions and sentiments expressed in tweets and provide insights into public opinions on various topics.",
    techStack: "Python, Pandas, Numpy, Seaborn, Matplotlib",
    imgSrc: "/sentiments.jpg",
    githubLink: "https://github.com/lizatinku/Twitter-Sentiment-Analysis.git",
  },
];

export default function Projects() {
  return (
  <section id="projects" className="flex flex-wrap justify-center bg-gradient-to-r from-[#4A2C2A] to-[#CC9966] p-8 space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="p-6 bg-blue-900 text-gray-100 shadow-lg rounded-lg border border-blue-700 transform transition hover:scale-105 hover:shadow-xl">
          <div className="relative overflow-hidden rounded-lg h-48 mb-4 border border-blue-700">
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4">
            <h3 className="text-2xl font-extrabold text-gray-100 mb-2">{project.title}</h3>
            <p className="text-gray-200 mb-4">{project.description}</p>
            <p className="text-gray-300 mb-4">
              <strong>Tech Stack:</strong> {project.techStack}
            </p>

            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <a
                    href={project.githubLink}
                    className="flex items-center justify-center text-blue-200 hover:text-blue-400 transition duration-300 ease-in-out text-lg rounded-full px-4 py-2 border border-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2 text-2xl" />
                    View on GitHub
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Content className="text-white bg-gray-800 px-2 py-1 rounded shadow-lg">
                  Open GitHub Repository
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}
