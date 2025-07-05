import React from 'react';
import { FaDownload, FaEye, FaGraduationCap, FaBriefcase, FaAward, FaCode } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`; // PDF should be in public folder
    link.download = 'Arnav_Singh_Rawat_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projects = [
    {
      title: 'Portfolio Website',
      tech: 'React.js, CSS3, JavaScript, EmailJS, React Router',
      period: '2024',
      links: {
        source: 'https://github.com/ArnavSinghRawat18/Portfolio-Website',
        live: 'https://arnav-singh-rawat-portfolio.netlify.app'
      },
      description: [
        'Developed a modern, responsive portfolio website showcasing skills and projects with animated coding workspace',
        'Integrated real-time weather API and daily inspiration quotes for enhanced user engagement',
        'Implemented smooth scroll animations, dark/light theme toggle, and mobile-first responsive design',
        'Built contact form with EmailJS integration for direct communication functionality',
        'Deployed on Netlify with continuous integration and optimized performance for all device types'
      ]
    },
    {
      title: '2048 Game',
      tech: 'HTML5, CSS3, JavaScript, Responsive Design, Touch Controls',
      period: '2024',
      links: {
        source: 'https://github.com/ArnavSinghRawat18/2048-game',
        live: 'https://lnkd.in/e7sJYN_7'
      },
      description: [
        'Developed a fully responsive and interactive clone of the classic 2048 game, playable on both desktop and mobile devices',
        'Implemented core game mechanics such as dynamic tile merging, score tracking, and random tile generation using vanilla JavaScript',
        'Added touch gesture support and swipe controls for mobile users, enhancing accessibility and user experience',
        'Designed an intuitive UI/UX with dark/light mode toggle, engaging tile animations, and visual feedback using CSS transitions',
        'Applied modular code practices and event-driven programming to manage gameplay logic and interface updates'
      ]
    },
    {
      title: 'Password Generator App',
      tech: 'React.js, Tailwind CSS, Vite, React Hooks',
      period: '2024',
      links: {
        source: 'https://github.com/ArnavSinghRawat18/Password-Generator-using-react',
        live: 'https://lnkd.in/dg9_e9dx'
      },
      description: [
        'Built a fully responsive password generator with React.js and Tailwind CSS featuring glassmorphism UI design',
        'Implemented customizable password length (8-32 characters) with toggle options for numbers and special characters',
        'Added one-click copy to clipboard functionality with toast notifications for better user feedback',
        'Utilized React hooks (useState, useEffect, useCallback) for state management and performance optimization',
        'Deployed with Vite for fast development and optimized build performance'
      ]
    },
    {
      title: 'Form Validation with Password Toggle',
      tech: 'HTML5, CSS3, JavaScript, DOM Manipulation, RegEx',
      period: '2024',
      links: {
        source: 'https://github.com/ArnavSinghRawat18/Form-validation-using-regax',
        live: 'https://formvalidationarnav.netlify.app/'
      },
      description: [
        'Created a responsive registration form with real-time input validation using vanilla JavaScript and regular expressions',
        'Implemented comprehensive error handling for empty fields, invalid email formats, and password strength requirements',
        'Added show/hide password toggle functionality with eye icon for enhanced user experience',
        'Designed clean UI with success redirect and form reset functionality upon successful validation',
        'Applied modern form validation techniques and accessibility best practices'
      ]
    },
    {
      title: 'Responsive News Website',
      tech: 'HTML5, CSS3, Responsive Design, CSS Grid, Flexbox',
      period: '2024',
      links: {
        source: 'https://github.com/ARNAVtitan/News_website',
        live: 'https://arnavnews.netlify.app/'
      },
      description: [
        'Developed a fully responsive news website using HTML and CSS, featuring sleek design and seamless user experience',
        'Demonstrated advanced CSS layout techniques including CSS Grid and Flexbox for optimal content presentation',
        'Implemented responsive design principles ensuring compatibility across various devices and screen sizes',
        'Created modern web design aesthetics with clean typography, proper spacing, and intuitive navigation',
        'Adhered to web development best practices for semantic HTML structure and maintainable CSS code'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech - Computer Science and Engineering',
      school: 'LNCTS, Lakshmi Narain College of Technology & Science',
      period: '2023 - 2027',
      location: 'Bhopal, Madhya Pradesh',
      achievements: [
        'Currently pursuing Bachelor of Technology in Computer Science',
        'Focused on programming languages, data structures, and web development',
        'Active participant in college technical activities'
      ]
    },
    {
      degree: 'High School Education',
      school: 'CBSE Board',
      period: '2021 - 2023',
      location: 'India',
      achievements: [
        '12th (PCM) CBSE Board - 82%',
        '10th CBSE Board - 90%'
      ]
    }
  ];

  const certifications = [
    {
      name: 'NEC \'24 Basic Track - Finalist',
      issuer: 'E-Cell, IIT Bombay',
      year: '2025',
      credentialId: 'ecell2021'
    },
    {
      name: 'National Science Olympiad Participation',
      issuer: 'National Science Foundation',
      year: '2025'
    },
    {
      name: 'Data Structures and Algorithms',
      issuer: 'Coursera',
      year: '2024'
    },
    {
      name: 'JavaScript Essential',
      issuer: 'Cisco Networking Academy',
      year: '2024'
    }
  ];

  const skills = {
    'Programming': ['C', 'C++', 'JavaScript', 'Data Structures & Algorithms', 'Object-Oriented Programming'],
    'Frontend': ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
    'Tools & Others': ['Git', 'Video Editing', 'Problem Solving', 'Web Development']
  };

  const extracurricular = [
    {
      category: 'Martial Arts',
      activities: [
        'Karate: Blue belt holder',
        'District Bronze medalist',
        'State level player'
      ]
    },
    {
      category: 'Sports',
      activities: [
        'Cricket: Part of inter-school team',
        'Badminton: College level player'
      ]
    },
    {
      category: 'Communication & Leadership',
      activities: [
        'Won multiple debate competitions',
        'Recognized as a good public speaker',
        'Strong communication skills'
      ]
    }
  ];

  return (
    <div className="resume">
      <div className="container">
        <div className="resume-content">
          {/* Header */}
          <div className="resume-header">
            <h1 className="heading-1">My <span className="text-gradient">Resume</span></h1>
            <div className="personal-info">
              <h2>Arnav Singh Rawat</h2>
              <p>Bhopal, MP, India</p>
              <div className="contact-links">
                <span>📧 rawatarnav180505@gmail.com</span>
                <span>📱 +91-9343612820</span>
                <a href="https://www.linkedin.com/in/arnav-singh-rawat-993725275/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/ArnavSinghRawat18" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://x.com/ArnavSinghRawa1" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com/a.r.n.a.v_s.i.n.g.h_r.a.w.a.t/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://wa.me/919343612820" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a href="https://leetcode.com/u/rawatarnav180505/" target="_blank" rel="noopener noreferrer">LeetCode</a>
                <a href="https://www.geeksforgeeks.org/user/rawatarna61ez/" target="_blank" rel="noopener noreferrer">GeeksforGeeks</a>
              </div>
            </div>
            <p className="resume-description">
              Computer Science Engineering student with strong programming fundamentals and web development skills. Passionate about learning new technologies and building innovative projects.
            </p>
            <div className="resume-actions">
              <button className="btn btn-primary" onClick={handleDownload}>
                <FaDownload />
                Download PDF
              </button>
              <button className="btn btn-secondary" onClick={() => window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank')}>
                <FaEye />
                View PDF
              </button>
            </div>
          </div>

          <div className="resume-main">
            {/* Projects Section */}
            <section className="resume-section">
              <div className="section-header">
                <FaCode className="section-icon" />
                <h2 className="section-title">Projects</h2>
              </div>
              <div className="timeline">
                {projects.map((project, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="job-header">
                        <h3 className="job-title">{project.title}</h3>
                        <span className="job-period">{project.period}</span>
                      </div>
                      <div className="job-company">
                        <strong>{project.tech}</strong>
                        {project.links && (
                          <span>
                            {project.links.source && <> • <a href={project.links.source} target="_blank" rel="noopener noreferrer">Source Code</a></>}
                            {project.links.live && <> • <a href={project.links.live} target="_blank" rel="noopener noreferrer">Live Website</a></>}
                          </span>
                        )}
                      </div>
                      <ul className="job-description">
                        {project.description.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="resume-section">
              <div className="section-header">
                <FaGraduationCap className="section-icon" />
                <h2 className="section-title">Education</h2>
              </div>
              <div className="education-list">
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="education-header">
                      <h3 className="education-degree">{edu.degree}</h3>
                      <span className="education-period">{edu.period}</span>
                    </div>
                    <div className="education-school">
                      <strong>{edu.school}</strong> • {edu.location}
                    </div>
                    <ul className="education-achievements">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section className="resume-section">
              <div className="section-header">
                <FaCode className="section-icon" />
                <h2 className="section-title">Technical Skills</h2>
              </div>
              <div className="skills-grid">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="skill-category">
                    <h3 className="skill-category-title">{category}</h3>
                    <div className="skill-tags">
                      {skillList.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications Section */}
            <section className="resume-section">
              <div className="section-header">
                <FaAward className="section-icon" />
                <h2 className="section-title">Certifications</h2>
              </div>
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <h3 className="certification-name">{cert.name}</h3>
                    <div className="certification-details">
                      <span className="certification-issuer">{cert.issuer}</span>
                      <span className="certification-year">{cert.year}</span>
                      {cert.credentialId && <span className="credential-id">ID: {cert.credentialId}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Extracurricular Activities Section */}
            <section className="resume-section">
              <div className="section-header">
                <FaBriefcase className="section-icon" />
                <h2 className="section-title">Extracurricular Activities</h2>
              </div>
              <div className="extracurricular-grid">
                {extracurricular.map((item, index) => (
                  <div key={index} className="extracurricular-category">
                    <h3 className="extracurricular-title">{item.category}</h3>
                    <ul className="extracurricular-list">
                      {item.activities.map((activity, actIndex) => (
                        <li key={actIndex}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
