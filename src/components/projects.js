import React from 'react';
import { FaGithub } from 'react-icons/fa';

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
    methodology: [
      "Data Splitting: The dataset was divided into training and testing sets.",
      "Feature Engineering: Focused on enhancing the data related to the source and destination of flights.",
      "Performance Visualization: Used tools like Seaborn and Matplotlib for plotting performance graphs."
    ],
    outcome: "The model predicts flight prices based on various user inputs.",
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
    methodology: [
      "Data Preprocessing: Removed noise such as URLs, mentions, hashtags, and stopwords from the text.",
      "Sentiment Classification: Applied Logistic Regression and Naive Bayes models to classify the tweets as positive or negative.",
      "Performance Evaluation: Assessed model performance using accuracy scores, AUC metrics, and ROC curves."
    ],
    outcome: "The analysis provided valuable insights into public sentiments and trends on Twitter.",
    githubLink: "https://github.com/lizatinku/Twitter-Sentiment-Analysis.git",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      {projects.map((project, index) => (
        <div key={index} className="p-4 mb-6 bg-gradient-to-r from-[#4A2C2A] to-[#CC9966] shadow-md rounded-lg border border-gray-300">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          {project.imgSrc && (
            <img src={project.imgSrc} alt={project.title} className="mb-4 rounded" />
          )}
          <p className="text-lg mb-4">{project.description}</p>
          <p className="text-lg mb-4"><strong>Tech Stack:</strong> {project.techStack}</p>
          
          {project.methodology && (
            <div className="text-lg mb-4">
              <strong>Methodology:</strong>
              <ul className="list-disc list-inside">
                {project.methodology.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {project.outcome && (
            <p className="text-lg mb-4"><strong>Outcome:</strong> {project.outcome}</p>
          )}
          
          <div className="text-center mt-4 text-3xl">
            <a 
              href={project.githubLink} 
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
      ))}
    </div>
  );
}
