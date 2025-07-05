import React from 'react';
import { FaDownload, FaEye, FaGraduationCap, FaBriefcase, FaAward, FaCode } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // PDF should be in public folder
    link.download = 'John_Doe_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      location: 'New York, NY',
      description: [
        'Lead frontend development team of 5 developers',
        'Architected and implemented scalable React applications',
        'Improved application performance by 40% through optimization',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupCo',
      period: '2022 - 2023',
      location: 'Remote',
      description: [
        'Developed responsive web applications using React and TypeScript',
        'Collaborated with design team to implement pixel-perfect UI',
        'Integrated RESTful APIs and managed application state',
        'Implemented automated testing with Jest and React Testing Library'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Web Agency Plus',
      period: '2021 - 2022',
      location: 'New York, NY',
      description: [
        'Built websites for small businesses using HTML, CSS, and JavaScript',
        'Worked with WordPress and custom CMS solutions',
        'Optimized websites for search engines and performance',
        'Provided technical support and maintenance for client websites'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2019 - 2023',
      location: 'New York, NY',
      achievements: [
        'Graduated Magna Cum Laude (GPA: 3.8/4.0)',
        'Dean\'s List for 6 semesters',
        'President of Computer Science Club',
        'Capstone Project: E-commerce Platform with React and Node.js'
      ]
    }
  ];

  const certifications = [
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2023'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      year: '2022'
    }
  ];

  const skills = {
    'Frontend': ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'],
    'Backend': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'],
    'Tools': ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'Webpack', 'Vite']
  };

  return (
    <div className="resume">
      <div className="container">
        <div className="resume-content">
          {/* Header */}
          <div className="resume-header">
            <h1 className="heading-1">My <span className="text-gradient">Resume</span></h1>
            <p className="resume-description">
              A comprehensive overview of my professional experience, education, and skills.
            </p>
            <div className="resume-actions">
              <button className="btn btn-primary" onClick={handleDownload}>
                <FaDownload />
                Download PDF
              </button>
              <button className="btn btn-secondary" onClick={() => window.open('/resume.pdf', '_blank')}>
                <FaEye />
                View PDF
              </button>
            </div>
          </div>

          <div className="resume-main">
            {/* Experience Section */}
            <section className="resume-section">
              <div className="section-header">
                <FaBriefcase className="section-icon" />
                <h2 className="section-title">Professional Experience</h2>
              </div>
              <div className="timeline">
                {experience.map((job, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="job-header">
                        <h3 className="job-title">{job.title}</h3>
                        <span className="job-period">{job.period}</span>
                      </div>
                      <div className="job-company">
                        <strong>{job.company}</strong> • {job.location}
                      </div>
                      <ul className="job-description">
                        {job.description.map((item, itemIndex) => (
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
                    </div>
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
