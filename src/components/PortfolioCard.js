import React from 'react';

const PortfolioCard = ({ title, description, imageUrl, projectLink, githubLink }) => {
  return (
    <div className="portfolio-cards">
      {/* <img src={imageUrl} className="card-img-top" alt={title} /> */}
      <div className="card-body">
        <h5 className="portfolio-card-title">{title}</h5>
        <p className="portfolio-card-description">{description}</p>
        <div className="button">
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View Project
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Reopository
        </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
