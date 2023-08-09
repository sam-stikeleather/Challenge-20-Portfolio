import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import PortfolioCard from './PortfolioCard';


const Portfolio = () => {
  return (
  <div>
    <Header page="portfolio" />
    <h1>Portfolio</h1>
    <div className="portfolio-cards">
      <PortfolioCard 
      title="HowRUFeeling"
      description="Jounrnaling and mental health self help application."
      imageUrl="url-to-image-1.jpg"
      projectLink="https://abisinchan.github.io/verbose-potato/index.html"
      githubLink="https://github.com/abisinchan/verbose-potato"
      />
      <PortfolioCard 
      title="Movies Are Us"
      description="Database application to track the movies you have seen."
      imageUrl="url-to-image-1.jpg"
      projectLink="https://arcane-everglades-12126-c502ea749e86.herokuapp.com/"
      githubLink="https://github.com/sam-stikeleather/Movies-Are-Us"
      />
      <PortfolioCard 
      title="Note Taker"
      description="Simple note taking application."
      imageUrl="url-to-image-1.jpg"
      projectLink="https://intense-brook-44275-77c54ae7fa56.herokuapp.com/"
      githubLink="https://github.com/sam-stikeleather/Challenge-11-Notes"
      />
      <PortfolioCard 
      title="Employee Tracking App"
      description="Employee database tracking application."
      imageUrl="url-to-image-1.jpg"
      projectLink="https://drive.google.com/file/d/1-KPDHpINgnz6Y1BHDLmlUeEF3BWUaMxs/view"
      githubLink="https://github.com/sam-stikeleather/Challenge-12-Tracker"
      />
      <PortfolioCard 
      title="9-5 Day Planner"
      description="Simple realtime, workday planner."
      imageUrl="url-to-image-1.jpg"
      projectLink="https://sam-stikeleather.github.io/Challenge-5-Planner/"
      githubLink="https://github.com/sam-stikeleather/Challenge-5-Planner"
      />
      <PortfolioCard 
      title="ReadMe Generator"
      description="Console driven README generator."
      imageUrl="url-to-image-1.jpg"
      projectLink="https://drive.google.com/file/d/1bqkP9jRjquXQ6cvE-eN2xcd8I4MFfU-5/view"
      githubLink="https://github.com/sam-stikeleather/Challenge-9-README"
      />
    </div>
    <Footer />
</div>
);
};

export default Portfolio;