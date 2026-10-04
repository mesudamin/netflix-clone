import React, { useState, useEffect } from 'react';
import './Header.css';
import headerLogo from '../../assets/header-logo.svg';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__left">
        <img src={headerLogo} alt="Netflix" className="header__logo" />
        <nav className="header__nav">
          <a href="#" className="header__nav-link">Home</a>
          <a href="#" className="header__nav-link">TV Shows</a>
          <a href="#" className="header__nav-link">Movies</a>
          <a href="#" className="header__nav-link">New & Popular</a>
          <a href="#" className="header__nav-link">My List</a>
          <a href="#" className="header__nav-link">Browse by Languages</a>
        </nav>
      </div>
      <div className="header__right">
        <button className="header__search" aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </button>
        <span className="header__notifications" aria-label="Notifications">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        </span>
        <div className="header__avatar">
          <div className="header__avatar-icon">U</div>
          <svg className="header__caret" width="12" height="12" viewBox="0 0 24 24" fill="white">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
