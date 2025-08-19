import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools, FaMobile, FaRocket, FaLightbulb, FaBookOpen } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: 'Programming Languages',
      description: 'Core languages I use for development',
      skills: ['C++', 'JavaScript', 'TypeScript', 'Python', 'Java'],
      experience: '2+ years',
      comfort: 'high'
    },
    {
      icon: <FaServer />,
      title: 'Frameworks & Libraries',
      description: 'Modern frameworks I build with',
      skills: ['Node.js', 'Express.js', 'React.js', 'Next.js', 'Python-Frappe'],
      experience: '2+ years',
      comfort: 'high'
    },
    {
      icon: <FaDatabase />,
      title: 'Databases & ORM',
      description: 'Data storage and management',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Prisma'],
      experience: '2+ years',
      comfort: 'medium'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud & Infrastructure',
      description: 'AWS services and deployment',
      skills: ['AWS Lambda', 'AWS S3', 'AWS DynamoDB', 'AWS SQS/SNS', 'Serverless Framework'],
      experience: '1+ years',
      comfort: 'medium'
    },
    {
      icon: <FaTools />,
      title: 'Development Tools',
      description: 'Tools that make development easier',
      skills: ['Git', 'GitHub Actions', 'Jest', 'Playwright', 'Docker'],
      experience: '2+ years',
      comfort: 'medium'
    },
    {
      icon: <FaMobile />,
      title: 'Other Technologies',
      description: 'Additional skills and knowledge',
      skills: ['GraphQL', 'Firebase', 'Machine Learning', 'Cryptography', 'Linux'],
      experience: '1+ years',
      comfort: 'medium'
    }
  ];

  const getComfortColor = (comfort) => {
    switch (comfort) {
      case 'high':
        return { bg: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', border: '#22c55e' };
      case 'medium':
        return { bg: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: '#3b82f6' };
      case 'low':
        return { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: '#f59e0b' };
      default:
        return { bg: 'rgba(156, 163, 175, 0.1)', color: '#9ca3af', border: '#9ca3af' };
    }
  };

  const getComfortIcon = (comfort) => {
    switch (comfort) {
      case 'high':
        return <FaRocket />;
      case 'medium':
        return <FaLightbulb />;
      case 'low':
        return <FaBookOpen />;
      default:
        return <FaBookOpen />;
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Technical Skills</h2>
          <p>Technologies and tools I work with daily</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => {
            const comfortStyle = getComfortColor(category.comfort);
            const comfortIcon = getComfortIcon(category.comfort);
            
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="skill-category"
              >
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <div className="category-info">
                    <h3>{category.title}</h3>
                    <p className="category-description">{category.description}</p>
                  </div>
                </div>
                
                <div className="category-meta">
                  <div className="experience-badge">
                    <span className="meta-label">Experience:</span>
                    <span className="meta-value">{category.experience}</span>
                  </div>
                  <div className="comfort-badge" style={comfortStyle}>
                    {comfortIcon}
                    <span className="comfort-text">
                      {category.comfort === 'high' ? 'Very Comfortable' : 
                       category.comfort === 'medium' ? 'Comfortable' : 'Learning'}
                    </span>
                  </div>
                </div>
                
                <div className="skills-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="skill-tag"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="skills-note"
        >
          <div className="note-content">
            <h4>💡 My Approach to Learning</h4>
            <p>
              I believe in continuous learning and practical application. Rather than claiming expertise, 
              I focus on understanding concepts deeply and applying them to solve real problems. 
              Every project is an opportunity to learn something new.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="learning-section"
        >
          <h3>Currently Exploring</h3>
          <div className="learning-tags">
            <span className="learning-tag">💬 Prompt Engineering</span>
            <span className="learning-tag">🏗️ System Design</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 