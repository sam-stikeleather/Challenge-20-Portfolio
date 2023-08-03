import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ page }) => {
  const links = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact Me' },
  { to: '/resume', label: 'Resume' },
].filter((link) => link.to !== `/${page}`);

  return (
    <header className="navbar navbar-light bg-light">
    <div className="container">
      <div className="navbar-brand">My Portfolio</div>
      <ul className="navbar-nav">
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
