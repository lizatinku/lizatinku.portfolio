import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectFlightPricePredictor() {
  return (
    <div className="p-4 mb-6 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966] shadow-md rounded-lg border border-gray-300">
      <h3 className="text-2xl font-semibold mb-2">Flight Price Predictor</h3>
      <p className="text-lg mb-4">
        This project aims to predict flight prices in India using logistic regression on a dataset sourced from Kaggle, originally gathered from the "Ease My Trip" website, covering the period from February 11 to March 31, 2022.
      </p>
      <p className="text-lg mb-4">
        <strong>Tech Stack:</strong><br />
        <li> Programming Languages: Python<br /> </li>
        <li> Libraries: Pandas, Numpy, Seaborn, Matplotlib </li>
      </p>
      <p className="text-lg mb-4">
        <strong>Methodology:</strong><br />
        <li> Data Splitting: The dataset was divided into training and testing sets.<br /> </li>
        <li> Feature Engineering: Focused on enhancing the data related to the source and destination of flights.<br /> </li>
        <li> Performance Visualization: Used tools like Seaborn and Matplotlib for plotting performance graphs. </li>
      </p>
      <p className="text-lg mb-4">
        <strong>Outcome:</strong><br />
        The model predicts flight prices based on the following user inputs: Date of travel, Airline, Country code, Plane number code, Departure time, Departure destination, and Duration of the flight.
      </p>
      <div className="text-center mt-4 text-3xl">
        <a 
          href="https://github.com/lizatinku/ML-Flight-price-predictor.git" 
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
