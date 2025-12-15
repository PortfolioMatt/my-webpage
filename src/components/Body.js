import React from 'react';
import '../styles/Body.css';

function Body() {
  return (
    <main className="body">
      <section id="home" className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a curated overview of selected work, context about myself as a person and as a developer, and ways to get in touch.</p>
      </section>
      <section id="about" className="content">
        <h2>About this site</h2>
        <p>
          This portfolio presents selected work and brief context on my approach to building software.
          For technical details and skills, please visit the Info section.
        </p>
      </section>
    </main>
  );
}

export default Body;
