import React from 'react';
import Header from '../components/Header'; // Adjust the path based on your file structure
import Footer from '../components/Footer'; // Adjust the path based on your file structure


const Welcome = () => {
  return (
    <div>
      <Header page="welcome" />
      <div className="welcome-page">
        <h1>About Me</h1>
        <p>As a new web developer, I am a creative problem-solver with a passion for applying and growing my skills.</p>
        <p>My background in restaurant management gives me a sense of urgency and an understanding of the necessity that is clear and concise communication. 
          I am a team player who is always looking to learn and grow. I am excited to bring my skills to a team that is looking to grow and learn together. I am 
          a Full Stack Web Development Certification holder as of 2023. I am proficient in HTML, CSS, JavaScript, Node.js, Express.js, React.js, and MongoDB.
        </p>
        <aside className="aside">
          <img src="/headshot2.png" alt="Profile" />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;