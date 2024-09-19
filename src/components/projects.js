import React from 'react';
import ProjectExpenseTracker from './ProjectExpenseTracker';
import ProjectFoodTrivia from './ProjectFoodTrivia';
import ProjectSentimentAnalysis from './ProjectSentimentAnalysis';
import ProjectFlightPricePredictor from './ProjectFlightPricePredictor';

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-r from-sunsetRed via-sunsetOrange to-sunsetYellow p-8 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">PROJECTS</h2>
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
