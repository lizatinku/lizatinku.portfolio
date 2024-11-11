import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectExpenseTracker() {
  return (
    <div className="p-4 mb-6 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966] shadow-md rounded-lg border border-gray-300">
      <h3 className="text-2xl font-semibold mb-2">Expense Tracker</h3>
      <img src="/pic%20expense%20tracker.png" alt="Expense Tracker" className="mb-4 rounded" />
      <p className="text-lg mb-4">
        Managing money can be a hassle, especially for college students juggling multiple responsibilities. This app aims to simplify financial management, offering valuable insights and a user-friendly experience to make managing your money easier.
      </p>
      <p className="text-lg mb-4">
        <strong>Built using: HTML, CSS, JavaScript, React.js</strong>
      </p>
      <div className="text-center mt-4 text-3xl">
      <a 
        href="https://github.com/lizatinku/expense-tracker" 
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
