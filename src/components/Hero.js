import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            Hi, I'm <span className="highlight">Kshitij Kumar</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            Software Engineer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-description"
          >
            Passionate about building scalable applications and solving complex problems. 
            Experienced in AWS cloud services, full-stack development, and machine learning. 
            Currently working at Procedure Technologies on the Bitespeed project.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-buttons"
          >
            <Link to="projects" smooth={true} duration={500}>
              <button className="btn btn-primary">View My Work</button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="btn btn-secondary">Get In Touch</button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hero-image"
        >
          <div className="hero-avatar">
            <img 
              src="/IMG_4421.jpg" 
              alt="Kshitij Kumar" 
              className="profile-image"
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hero-social"
      >
        <a href="https://github.com/Kshitij27Kumar" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/kshitij2703" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:kshitij.kumar.careers@gmail.com" className="social-link">
          <FaEnvelope size={24} />
        </a>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="scroll-indicator"
      >
        <Link to="about" smooth={true} duration={500}>
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero; 