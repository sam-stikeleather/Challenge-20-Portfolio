import React from 'react';

const PortfolioCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View Project
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
