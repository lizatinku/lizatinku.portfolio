import React from 'react';
import ProjectExpenseTracker from './ProjectExpenseTracker';
import ProjectFoodTrivia from './ProjectFoodTrivia';
import ProjectSentimentAnalysis from './ProjectSentimentAnalysis';
import ProjectFlightPricePredictor from './ProjectFlightPricePredictor';

export default function Projects() {
  return (
    <section id="project" className = "p-4 mb-6 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966] shadow-md rounded-lg border border-gray-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sunsetRed mb-4">PROJECTS</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <ProjectExpenseTracker />
        <ProjectFoodTrivia />
        <ProjectSentimentAnalysis />
        <ProjectFlightPricePredictor />
      </div>
    </section>
  );
}
