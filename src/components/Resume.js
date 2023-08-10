import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Adjust the path based on your file structure


const Resume = () => {
  return (
    <div>
      <Header page="resume" />
      <div className="row">
      <h1>Resume</h1>
      </div>
      <div>
        <img src="/resume.png" alt="resume" />
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
