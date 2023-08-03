import React from 'react';
import Header from '../components/Header'; // Adjust the path based on your file structure

const Welcome = () => {
  return (
    <div>
      <Header page="welcome" />
      <div className="welcome-page">
        <h1>Thank you for coming</h1>
        <div className="buttons">
          {/* Buttons for Portfolio, Contact, and Resume */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;