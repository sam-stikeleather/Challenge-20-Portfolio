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
      title="Project 1"
      description="Description of Project 1."
      imageUrl="url-to-image-1.jpg"
      link="https://project1-link.com"
      />
      <PortfolioCard 
      title="Project 1"
      description="Description of Project 1."
      imageUrl="url-to-image-1.jpg"
      link="https://project1-link.com"
      />
      <PortfolioCard 
      title="Project 1"
      description="Description of Project 1."
      imageUrl="url-to-image-1.jpg"
      link="https://project1-link.com"
      />
      <PortfolioCard 
      title="Project 1"
      description="Description of Project 1."
      imageUrl="url-to-image-1.jpg"
      link="https://project1-link.com"
      />
      <PortfolioCard 
      title="Project 1"
      description="Description of Project 1."
      imageUrl="url-to-image-1.jpg"
      link="https://project1-link.com"
      />
      <PortfolioCard 
      title="Project 1"
      description="Description of Project 1."
      imageUrl="url-to-image-1.jpg"
      link="https://project1-link.com"
      />
    </div>
    <Footer />
</div>
);
};

export default Portfolio;