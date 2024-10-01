import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectSentimentAnalysis() {
  return (
    <div className="p-4 mb-6 bg-gradient-to-r from-sunsetPink via-sunsetOrange to-sunsetYellow shadow-md rounded-lg border border-gray-300">
      <h3 className="text-2xl font-semibold mb-2">Twitter Sentiment Analysis</h3>
      <p className="text-lg mb-4">
        This project involves analyzing the sentiment of Twitter tweets using the Sentiment140 dataset. The goal was to understand the emotions and sentiments expressed in tweets and provide insights into public opinions on various topics.
      </p>
      <p className="text-lg mb-4">
        <strong>Tech Stack:</strong><br />
        <li> Programming Language: Python <br /> </li>
         <li> Libraries: Pandas, Numpy, Seaborn, Matplotlib </li>
      </p>
      <p className="text-lg mb-4">
        <strong>Methodology:</strong><br />
        <li> Data Preprocessing: Removed noise such as URLs, mentions, hashtags, and stopwords from the text.<br /> </li>
        <li> Sentiment Classification: Applied Logistic Regression and Naive Bayes models to classify the tweets as positive or negative.<br /> </li>
        <li> Performance Evaluation: Assessed model performance using accuracy scores, AUC metrics and ROC curves. </li>
      </p>
      <p className="text-lg mb-4">
        <strong>Outcome:</strong><br />
        The analysis provided valuable insights into public sentiments and trends on Twitter, demonstrating the effectiveness of sentiment analysis techniques in capturing the emotional tone of social media content.
      </p>
      <div className="text-center mt-4 text-3xl">
        <a 
          href="https://github.com/lizatinku/Twitter-Sentiment-Analysis.git" 
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