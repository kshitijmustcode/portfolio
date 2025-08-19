import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'House-E-Plaza: Full Stack Web Application',
      description: 'A house marketplace app where 20k authenticated users per month can upload details of their houses for sale or rent. Features Leaflet map integration and geocoding API.',
      category: 'fullstack',
      technologies: ['React.js', 'CSS', 'Firebase', 'Firestore', 'Leaflet Maps', 'Geocoding API', 'Vercel'],
      github: 'https://github.com/kshitijmustcode/House-E-Plaza',
      live: 'https://house-e-plaza.vercel.app/',
      features: ['User Authentication', 'House Listings', 'Interactive Maps', 'Geolocation', 'Responsive Design', 'Firebase Backend'],
      icon: <FaCode />,
      hasLiveDemo: true
    },
    {
      id: 2,
      title: 'Stockegy: Deep Learning',
      description: 'Research project on determining stock price direction using CNN on 1-D time series data encoded as 2-D images. Achieved up to 59.9% accuracy.',
      category: 'ml',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'OpenCV', 'CNN', 'Time Series Analysis'],
      github: 'https://github.com/kshitijmustcode/Stock-Market-Direction-Analysis',
      features: ['Deep Learning', 'CNN Architecture', 'Image Processing', 'Stock Analysis', 'Data Visualization', 'Research Paper'],
      icon: <FaMobile />,
      hasLiveDemo: false
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Personal Projects</h2>
          <p>Some of my recent work and research projects</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-title">
                  <h3>{project.title}</h3>
                  <span className={`project-category ${project.category}`}>
                    {project.category === 'fullstack' ? 'Full Stack' : 'Machine Learning'}
                  </span>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.slice(0, 6).map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> View Code
                </a>
                {project.hasLiveDemo && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="projects-cta"
        >
          <h3>Want to see more?</h3>
          <p>Check out my GitHub for additional projects and contributions</p>
          <a href="https://github.com/kshitijmustcode" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaGithub /> View GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 