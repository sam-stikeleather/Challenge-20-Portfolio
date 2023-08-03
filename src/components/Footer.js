import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <a
          href="https://github.com/sam-stikeleather"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-social-icon"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-stikeleather-3967a816/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-social-icon"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
