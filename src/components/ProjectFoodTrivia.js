import React from 'react';

export default function ProjectFoodTrivia() {
  return (
    <div className="p-4 mb-6 bg-gradient-to-r from-sunsetPink via-sunsetOrange to-sunsetYellow shadow-md rounded-lg border border-gray-300">
      <h3 className="text-2xl font-semibold mb-2">Indian Food Trivia</h3>
      <p className="text-lg mb-4">
        Indian Food fills both my stomach and my heart. The "Indian Food Trivia" project is designed to celebrate the vibrant and diverse flavors of Indian food through an engaging and interactive quiz format.
      </p>
      <p className="text-lg mb-4">
        <strong>Tech Stack:</strong>
      <ul className="list-disc list-inside mb-4">
        <li>Programming Languages: HTML, CSS, JavaScript, Typescript</li>
        <li>Frameworks: Next.js, TailwindCSS</li>
      </ul>
      </p>
      <h4 className="text-xl font-semibold mb-2">Features:</h4>
      <p className="text-lg mb-4">
        <li>Interactive Quiz Experience: Users can explore categories such as Popular Dishes, Desserts, West Indian Cuisine, and Indo-Western Fusion, with questions presented one at a time.</li>
        <li>Modern Design: A sleek, responsive interface built with TailwindCSS for an optimal user experience.</li>
        <li>Seamless Interactions: Powered by Next.js, the app delivers real-time feedback, ensuring fast loading times and error handling for uninterrupted quiz progression.</li>
      </p>

      <div className="text-center mt-4 text-3xl">
      <a 
        href="https://github.com/lizatinku/food-trivia" 
        className="relative transition-all duration-300 ease-in-out hover:text-blue-700 group"
        target="_blank" 
        rel="noreferrer"
      >
        View Project
        <span className="absolute inset-0 bg-orange-600 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30 blur-sm"></span>
      </a>
    </div>
    </div>
  );
}
