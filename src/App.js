import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Welcome from './components/Welcome';

import './App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
