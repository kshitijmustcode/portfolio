import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = [
    { icon: <FaCode />, title: 'Frontend Development', description: 'React.js, Next.js, TypeScript, JavaScript' },
    { icon: <FaServer />, title: 'Backend Development', description: 'Node.js, Express.js, Python, Java, C++' },
    { icon: <FaDatabase />, title: 'Database & ORM', description: 'PostgreSQL, MySQL, MongoDB, DynamoDB, Prisma' },
    { icon: <FaCloud />, title: 'Cloud & DevOps', description: 'AWS (Lambda, S3, EC2), Serverless, Docker' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3>Who I Am</h3>
            <p>
              I'm a Software Development Engineer I who graduated from Bennett University with a BTech in Computer Science 
              (yes, I survived all those algorithms and data structures! 🎯).
            </p>
            <p>
              My journey started with the classic "Hello World" and evolved into building scalable applications 
              that don't crash at 3 AM (most of the time 🫢). I'm currently at Procedure Technologies working on 
              the Bitespeed project, where I'm the backend wizard who occasionally dabbles in frontend 
              (but please don't ask me to make it pretty - that's not my superpower! 🎭).
            </p>
            <p>
              When I'm not debugging code or attending meetings that could have been emails, you'll find me 
              at the gym lifting weights (because strong code needs a strong developer 💪), listening to music 
              while coding (my secret sauce for staying calm and focused 🎵), or playing online games 
              (because even developers need to rage quit sometimes 🎮).
            </p>
            
            <div className="personal-interests">
              <h4>Beyond Code</h4>
              <div className="interests-tags">
                <span className="interest-tag">🏋️ Gym & Fitness</span>
                <span className="interest-tag">🎵 Music Lover</span>
                <span className="interest-tag">🎮 Online Gaming</span>
                <span className="interest-tag">🚀 Tech Explorer</span>
                <span className="interest-tag">📚 Continuous Learning</span>
                <span className="interest-tag">�� Food Lover</span>
                <span className="interest-tag">🧮 DSA Problem Solver</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="about-skills"
          >
            <h3>Core Competencies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="skill-card"
                >
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <h4>{skill.title}</h4>
                  <p>{skill.description}</p>
                </motion.div>
              ))}
            </div>
            
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="about-cta"
        >
          <h3>Ready to work together?</h3>
          <p>Let's discuss how I can help bring your ideas to life</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 