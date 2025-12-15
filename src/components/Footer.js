import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/mateo-arias-acosta/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
          >
            <LinkedInIcon fontSize="small" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/MattArias2226"
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
          >
            <GitHubIcon fontSize="small" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/mattoski_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Instagram profile"
          >
            <InstagramIcon fontSize="small" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
