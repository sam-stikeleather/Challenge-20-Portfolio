import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Adjust the path based on your file structure

const Resume = () => {
  const downloadResume = () => {
    // Define the URL to your resume PDF
    const resumeUrl = '/Resume.pdf'; // Replace with the actual URL
    
    // Trigger the download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = 'https://drive.google.com/file/d/1j__0panCJrspkRQcSfb3cLAFXo-icvhd/view?usp=sharing'; // Open in a new tab
    link.download = '/Resume.pdf'; // Specify the filename for download
    link.click();
  };

  return (
    <div className="resume-page">
      <div>
      <Header page="resume" />
      <div className="row">
      <h1>Proficiencies</h1>
      <h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Git</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
        </ul>
      </h3>
      </div>
      <div className="resume">
        <a href="https://drive.google.com/file/d/1j__0panCJrspkRQcSfb3cLAFXo-icvhd/view?usp=sharing" target="_blank" rel="noreferrer">
        <img src="/resume.png" alt="resume" />
        </a>
      </div>
      <div className="row">
      <div className="btn" onClick={downloadResume}>Download Resume</div>
      </div>
      <Footer />
    </div>
    </div>
  );
};



export default Resume;
