import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectFoodTrivia() {
  return (
    <div className="p-4 mb-6 bg-gradient-to-r from-sunsetPink via-sunsetOrange to-sunsetYellow shadow-md rounded-lg border border-gray-300">
      <h3 className="text-2xl font-semibold mb-2">Indian Food Trivia</h3>
      <img src="/pic food trivia.png" alt="Food trivia website screenshot" className="mb-4 rounded" />
      <p className="text-lg mb-4">
        Indian Food fills both my stomach and my heart. The "Indian Food Trivia" project is designed to celebrate the vibrant and diverse flavors of Indian food through an engaging and interactive quiz format.
      </p>
      <p className="text-lg mb-4">
        <strong> Built using: HTML, TailwindCSS, JavaScript, Typescript, Next.js </strong>
      </p>
      <div className="text-center mt-4 text-3xl">
        <a 
          href="https://github.com/lizatinku/food-trivia" 
          className="relative transition-all duration-300 ease-in-out hover:text-blue-700 group"
          target="_blank" 
          rel="noreferrer"
        >
          <FaGithub className="inline-block mr-2" />
          View Project
          <span className="absolute inset-0 bg-orange-600 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30 blur-sm"></span>
        </a>
      </div>
    </div>
  );
}