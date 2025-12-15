import React from 'react';
import '../styles/Body.css';

function Body() {
  return (
    <main className="body">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the main content area of your website.</p>
      </section>
      <section className="content">
        <h2>About Me</h2>
        <p>Share your professional information and expertise here.</p>
      </section>
    </main>
  );
}

export default Body;
