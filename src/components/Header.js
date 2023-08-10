import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ page }) => {
  const links = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact Me' },
  { to: '/resume', label: 'Resume' },
].filter((link) => link.to !== `/${page}`);

  return (
    <header className="navbar">
      <div className="container">
        {page !== 'welcome' && (
        <div className="header-photo">
          <img src="/headshot.png" alt="headshot"/>
        </div>
        )}
        <div className="navbar-brand">
          <h1>Samuel N Stikeleather</h1>
        </div>
        <ul className="navbar-nav ml-auto"> 
          {page !== 'welcome' && ( // Only show Home button if not on the Home page
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          )}
          {links.map((link) => (
            <li className="nav-item" key={link.to}>
              <Link to={link.to} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
);
};

export default Header;
