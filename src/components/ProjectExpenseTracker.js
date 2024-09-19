import React from 'react';

export default function ProjectExpenseTracker() {
  return (
    <div className="p-4 mb-6 bg-gradient-to-r from-sunsetPink via-sunsetOrange to-sunsetYellow shadow-md rounded-lg border border-gray-300">
      <h3 className="text-2xl font-semibold mb-2">AI-Powered Expense Tracker</h3>
      <p className="text-lg mb-4">
        Managing money can be a hassle, especially for college students juggling multiple responsibilities. This app aims to simplify financial management, offering valuable insights and a user-friendly experience to make managing your money easier.
      </p>
      <p className="text-lg mb-4">
        <strong>Tech Stack:</strong>
      <ul className="list-disc list-inside mb-4">
        <li>Programming Languages: HTML, CSS, JavaScript</li>
        <li>Frameworks: ReactJS</li>
      </ul>
      </p>
      <h4 className="text-xl font-semibold mb-2">Features:</h4>
      <p className="text-lg mb-4"> 
        <li> Expense Tracking: Add, edit, and delete expenses. Sort expenses by date, amount, and price.</li>
        <li> Stock Market API Integration: Real-time stock data using StocksAPI.</li>
        <li> Data Export: Export data to PDF and CSV formats.</li>
        <li> AI-Powered Assistance (Coming Soon): Personalized insights and recommendations using OpenAI's API.</li>
      </p>
      <div className="text-center mt-4 text-3xl">
      <a 
        href="https://github.com/lizatinku/expense-tracker" 
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
