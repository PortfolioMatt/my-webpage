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

  const handleNavigation = (e, hash) => {
    e.preventDefault();
    onNavigate(hash);
  };

  return (
    <header ref={headerRef} className="header">
      <nav className="navbar">
        <div className="navbar-title">Welcome to my Portfolio</div>
        <div className="navbar-links">
          <a className="nav-link" href="#home" onClick={(e) => handleNavigation(e, '#home')}>
            <HomeIcon fontSize="small" />
            Home
          </a>
          <a className="nav-link" href="#info" onClick={(e) => handleNavigation(e, '#info')}>
            <InfoIcon fontSize="small" />
            Info
          </a>
          <a className="nav-link" href="#projects" onClick={(e) => handleNavigation(e, '#projects')}>
            <FolderIcon fontSize="small" />
            Projects
          </a>
          <a className="nav-link" href="#contact" onClick={(e) => handleNavigation(e, '#contact')}>
            <ContactMailIcon fontSize="small" />
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;