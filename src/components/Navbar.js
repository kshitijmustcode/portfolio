import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  const handleNav = () => setNav(!nav);

  return (
    <div className={shadow ? 'navbar shadow' : 'navbar'}>
      <div className="navbar-container">
        <Link to="home" smooth={true} duration={500} className="navbar-logo">
          <h1>Kshitij</h1>
        </Link>
        
        <div className="nav-menu">
          <Link to="home" smooth={true} duration={500} className="nav-link">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="nav-link">
            About
          </Link>
          <Link to="experience" smooth={true} duration={500} className="nav-link">
            Experience
          </Link>
          <Link to="projects" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} className="nav-link">
            Skills
          </Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        <div className="hamburger" onClick={handleNav}>
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
          <Link to="home" smooth={true} duration={500} className="mobile-link" onClick={handleNav}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="mobile-link" onClick={handleNav}>
            About
          </Link>
          <Link to="experience" smooth={true} duration={500} className="mobile-link" onClick={handleNav}>
            Experience
          </Link>
          <Link to="projects" smooth={true} duration={500} className="mobile-link" onClick={handleNav}>
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} className="mobile-link" onClick={handleNav}>
            Skills
          </Link>
          <Link to="contact" smooth={true} duration={500} className="mobile-link" onClick={handleNav}>
            Contact
          </Link>
          <button 
            className="theme-toggle mobile-theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 