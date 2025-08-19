import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Development Engineer I',
      company: 'Procedure Technologies',
      location: 'Remote',
      period: 'Dec 2023 - Present',
      description: 'Working on the Bitespeed project, a comprehensive e-commerce platform. Specializing in backend development with AWS services, building scalable APIs, and implementing event-driven architectures.',
      achievements: [
        'Developed and maintained RESTful APIs using Node.js and Express.js',
        'Implemented AWS Lambda functions for serverless computing',
        'Worked with DynamoDB for data storage and SQS/SNS for message queuing',
        'Collaborated with frontend team to ensure seamless integration',
        'Participated in code reviews and contributed to team best practices'
      ]
    },
    {
      id: 2,
      title: 'Software Development Engineer Trainee',
      company: 'Procedure Technologies',
      location: 'Remote',
      period: 'Aug 2023 - Oct 2023',
      description: 'Developed full-stack applications using modern development practices and automated testing.',
      achievements: [
        'Built full-stack IPL Auction System with CRUD APIs and entity management pages',
        'Applied Design Patterns and TDD for clean, reliable code',
        'Automated tests with Playwright and Jest',
        'Set up CI/CD pipelines using GitHub Actions'
      ]
    },
    {
      id: 3,
      title: 'Microsoft Cybersecurity Engage\'22, Mentee',
      company: 'Microsoft',
      location: 'Remote',
      period: 'May 2022 - Jun 2022',
      description: 'Selected for Microsoft\'s prestigious Cybersecurity Engage program, focusing on advanced cybersecurity concepts and research.',
      achievements: [
        'Learned about Cybersecurity concepts including Digital Forensics and Malware Analysis',
        'Studied Common Vulnerabilities and attack vectors',
        'Conducted research on preventing Stuxnet-like attacks',
        'Submitted a comprehensive research paper on future attack prevention strategies',
        'Gained hands-on experience with Microsoft\'s cybersecurity tools and methodologies'
      ]
    },
    {
      id: 4,
      title: 'Research and Development Intern',
      company: 'Bennett University',
      location: 'Remote',
      period: 'Dec 2020 - Feb 2021',
      description: 'Contributed to funded research project on lightweight image encryption techniques for cloud-enabled IoT applications.',
      achievements: [
        'Contributed to funded research project on Lightweight Image Encryption Techniques',
        'Implemented 2D sine-cosine cross-chaotic (SC3) maps in Java for image encryption',
        'Rectified decryption algorithm in published research paper',
        'Applied chaotic systems for secure image processing in IoT applications'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Work Experience</h2>
          <p>My professional journey in software development</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                </div>
                
                <div className="timeline-meta">
                  <div className="meta-item">
                    <FaCalendarAlt />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <p className="timeline-description">{exp.description}</p>
                
                <div className="timeline-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="experience-cta"
        >
          <h3>Interested in working together?</h3>
          <p>I'm always open to discussing new opportunities and exciting projects</p>
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 