import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

const Welcome = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to My Portfolio</h1>
      <div className="buttons">
        <Link to="/portfolio" className="btn btn-primary">
          Portfolio
        </Link>
        <Link to="/contact" className="btn btn-primary">
          Contact Me
        </Link>
        <Link to="/resume" className="btn btn-primary">
          Resume
        </Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
