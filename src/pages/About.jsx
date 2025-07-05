import React from 'react';
import { FaGraduationCap, FaBriefcase, FaAward, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const timelineData = [
    {
      type: 'education',
      icon: <FaGraduationCap />,
      title: 'Bachelor of Technology - Computer Science',
      organization: 'LNCTS, Lakshmi Narain College of Technology & Science',
      period: '2023 - 2027',
      description: 'Currently pursuing B.Tech in Computer Science and Engineering with focus on programming, data structures, and web development.',
      location: 'Bhopal, MP, India'
    },
    {
      type: 'education',
      icon: <FaGraduationCap />,
      title: 'Higher Secondary Education (12th)',
      organization: 'CBSE Board',
      period: '2021 - 2023',
      description: 'Completed 12th grade in PCM (Physics, Chemistry, Mathematics) with 82% marks.',
      location: 'India'
    },
    {
      type: 'education',
      icon: <FaGraduationCap />,
      title: 'Secondary Education (10th)',
      organization: 'CBSE Board',
      period: '2019 - 2021',
      description: 'Completed 10th grade with 90% marks.',
      location: 'India'
    },
    {
      type: 'achievement',
      icon: <FaAward />,
      title: 'Personal Projects & Learning',
      organization: 'Self-Directed Learning',
      period: '2024 - Present',
      description: 'Built multiple responsive websites and web applications using modern technologies like React.js, JavaScript, and CSS.',
      location: 'Bhopal, MP, India'
    }
  ];

  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          {/* Hero Section */}
          <div className="about-hero">
            <div className="profile-section">
              <div className="profile-image">
                <img 
                  src={`${process.env.PUBLIC_URL}/logo192.png`}
                  alt="Profile" 
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMkEyQTJBIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM0RjlFRkYiLz4KPHBhdGggZD0iTTkwIDE4MEM5MCAyMTAgMTE3LjkgMjM1IDE1MCAyMzVDMTgyLjEgMjM1IDIxMCAyMTAgMjEwIDE4MEgyMTBWMjcwSDkwVjE4MFoiIGZpbGw9IiM0RjlFRkYiLz4KPC9zdmc+';
                  }}
                />
                <div className="profile-badge">
                  <span>Available for Work</span>
                </div>
              </div>
            </div>

            <div className="about-text">
              <h1 className="heading-1">About <span className="text-gradient">Me</span></h1>
              <div className="bio">
                <p className="body-large">
                  Hello! I'm Arnav Singh Rawat, a passionate Front-End Developer currently pursuing B.Tech 
                  in Computer Science and Engineering from LNCTS, Lakshmi Narain College of Technology & Science, Bhopal.
                </p>
                <p>
                  I specialize in creating responsive, user-friendly web applications using modern technologies 
                  like React.js, JavaScript, HTML5, CSS3, and various CSS frameworks. 
                  My focus is on delivering clean, efficient code and exceptional user experiences.
                </p>
                <p>
                  As a student, I'm passionate about learning and implementing new technologies. I enjoy building 
                  projects that challenge me and help me grow as a developer. I'm always eager to learn new technologies and 
                  stay updated with the latest trends in web development.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new web technologies, working on personal projects, 
                  and contributing to the developer community. I believe in continuous learning and  
                  collaboration in driving innovation.
                </p>
              </div>

              <div className="quick-facts">
                <div className="fact">
                  <span className="fact-label">Location</span>
                  <span className="fact-value">
                    <FaMapMarkerAlt /> Bhopal, MP, India
                  </span>
                </div>
                <div className="fact">
                  <span className="fact-label">Status</span>
                  <span className="fact-value">Student & Learning</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Focus</span>
                  <span className="fact-value">Frontend Development</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Status</span>
                  <span className="fact-value status-available">Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="timeline-section">
            <h2 className="heading-2 text-center">My <span className="text-gradient">Journey</span></h2>
            <div className="timeline">
              {timelineData.map((item, index) => (
                <div key={index} className={`timeline-item ${item.type}`}>
                  <div className="timeline-marker">
                    <div className="timeline-icon">
                      {item.icon}
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">{item.title}</h3>
                      <span className="timeline-period">{item.period}</span>
                    </div>
                    <div className="timeline-organization">
                      <strong>{item.organization}</strong>
                      <span className="location">
                        <FaMapMarkerAlt /> {item.location}
                      </span>
                    </div>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="values-section">
            <h2 className="heading-2 text-center">What Drives <span className="text-gradient">Me</span></h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>
                  I believe in pushing boundaries and exploring new technologies to create 
                  cutting-edge solutions that make a difference.
                </p>
              </div>
              <div className="value-card">
                <h3>Quality</h3>
                <p>
                  Every line of code matters. I'm committed to writing clean, maintainable, 
                  and efficient code that stands the test of time.
                </p>
              </div>
              <div className="value-card">
                <h3>Collaboration</h3>
                <p>
                  Great products are built by great teams. I thrive in collaborative 
                  environments where ideas can flourish and grow.
                </p>
              </div>
              <div className="value-card">
                <h3>Learning</h3>
                <p>
                  Technology evolves rapidly, and so do I. I'm always eager to learn 
                  new skills and adapt to emerging trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
