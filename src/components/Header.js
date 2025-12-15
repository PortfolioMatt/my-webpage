import React, { useLayoutEffect, useRef } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FolderIcon from '@mui/icons-material/Folder';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import '../styles/Header.css';

function Header({ onNavigate }) {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const updateHeaderHeight = () => {
      const height = headerRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  const handleNavigation = (page) => {
    onNavigate(page);
  };

  return (
    <header ref={headerRef} className="header">
      <nav className="navbar">
        <div className="navbar-title">Welcome to my Portfolio</div>
        <div className="navbar-links">
          <button className="nav-link" onClick={() => handleNavigation('home')}>
            <HomeIcon fontSize="small" />
            Home
          </button>
          <a className="nav-link" href="#about">
            <InfoIcon fontSize="small" />
            Info
          </a>
          <a className="nav-link" href="#projects">
            <FolderIcon fontSize="small" />
            Projects
          </a>
          <button className="nav-link" onClick={() => handleNavigation('contact')}>
            <ContactMailIcon fontSize="small" />
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;