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
          This webpage was built using React, a popular JavaScript library for building user interfaces. It showcases my skills and projects as a developer. The site is designed to be responsive and user-friendly, ensuring a seamless experience across different devices.
        </p>
        <p>
          Feel free to explore the various sections, including my projects, background information, and contact details. If you have any questions or would like to connect, don't hesitate to reach out through the contact form.
        </p>
      </section>
    </main>
  );
}

export default Body;
