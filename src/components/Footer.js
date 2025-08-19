import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/kshitijmustcode',
      name: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/kshitij2703',
      name: 'LinkedIn'
    },
    {
      icon: <FaCode />,
      url: 'https://leetcode.com/kshitij_2703',
      name: 'LeetCode'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kshitij Kumar</h3>
            <p>Software Engineer</p>
            <p>Passionate about building scalable solutions</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} Kshitij Kumar. All rights reserved. Made with <FaHeart className="heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 