import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <a
          href="https://github.com/sam-stikeleather"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-social-icon"
        ><FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-stikeleather-3967a816/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-social-icon"
        ><FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://twitter.com/SamStikeleather"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-social-icon"
        ><FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
