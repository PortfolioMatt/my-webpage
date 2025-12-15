import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-title">Welcome to my Portfolio</div>
        <button 
          className="menu-toggle-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className={`dropdown-menu ${isClosing ? 'closing' : 'opening'}`}>
          <ul className="menu-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;