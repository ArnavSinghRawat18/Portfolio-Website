import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import './Projects.css';
import game2048Screenshot from '../assets/2048 game.jpg';
import portfolioScreenshot from '../assets/portfolio-website.jpg';
import passwordGeneratorScreenshot from '../assets/password-generator.jpg';
import formValidationScreenshot from '../assets/form-validation.jpg';
import newsWebsiteScreenshot from '../assets/news-website.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my skills and projects. Features animated coding workspace, real-time weather integration, daily inspiration quotes, and smooth scroll animations.',
      image: portfolioScreenshot,
      technologies: ['React.js', 'CSS3', 'JavaScript', 'EmailJS', 'React Router'],
      category: 'frontend',
      githubUrl: 'https://github.com/ArnavSinghRawat18/Portfolio-Website',
      liveUrl: 'https://686940481f7b30000842a400--arnavsinghrawatportfolio.netlify.app',
      featured: true
    },
    {
      id: 2,
      title: '2048 Game',
      description: 'A fully responsive, mobile-friendly 2048 game built with vanilla HTML, CSS, and JavaScript. Features dark/light theme toggle, smooth tile merge animations, touch-friendly controls, and works seamlessly on both desktop and mobile devices.',
      image: game2048Screenshot,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Touch Controls'],
      category: 'interactive',
      githubUrl: 'https://github.com/ArnavSinghRawat18/2048-game',
      liveUrl: 'https://lnkd.in/e7sJYN_7',
      featured: true
    },
    {
      id: 3,
      title: 'Password Generator App',
      description: 'A fully responsive password generator built with React.js and Tailwind CSS. Features customizable password length (8-32 characters), toggle options for numbers and special characters, one-click copy to clipboard with toast alerts, and glassmorphism UI design.',
      image: passwordGeneratorScreenshot,
      technologies: ['React.js', 'Tailwind CSS', 'Vite', 'React Hooks', 'Responsive Design'],
      category: 'react',
      githubUrl: 'https://github.com/ArnavSinghRawat18/Password-Generator-using-react',
      liveUrl: 'https://lnkd.in/dg9_e9dx',
      featured: true
    },
    {
      id: 4,
      title: 'Form Validation with Password Toggle',
      description: 'A responsive registration form built with vanilla HTML, CSS, and JavaScript. Features real-time input validation, error handling for empty and invalid fields, password strength enforcement, show/hide password toggle, and clean UI with success redirect.',
      image: formValidationScreenshot,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'Form Validation'],
      category: 'frontend',
      githubUrl: 'https://github.com/ArnavSinghRawat18/Form-validation-using-regax',
      liveUrl: 'https://formvalidationarnav.netlify.app/',
      featured: false
    },
    {
      id: 5,
      title: 'Responsive News Website',
      description: 'A fully responsive news website built with HTML and CSS, featuring sleek design and seamless user experience. Demonstrates advanced CSS layout techniques, responsive design principles, and modern web design aesthetics for optimal content presentation.',
      image: newsWebsiteScreenshot,
      technologies: ['HTML5', 'CSS3', 'Responsive Design', 'CSS Grid', 'Flexbox'],
      category: 'frontend',
      githubUrl: 'https://github.com/ARNAVtitan/News_website',
      liveUrl: 'https://arnavnews.netlify.app/',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'react', label: 'React Apps' },
    { key: 'interactive', label: 'Interactive' },
    { key: 'learning', label: 'Learning Projects' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="projects">
      <div className="container">
        <div className="projects-content">
          {/* Header */}
          <div className="projects-header">
            <h1 className="heading-1">My <span className="text-gradient">Projects</span></h1>
            <p className="projects-description">
              Here's a showcase of my frontend development projects. Each project demonstrates my skills in 
              React.js, JavaScript, and modern web technologies, focusing on clean code, responsive design, 
              and engaging user experiences.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="featured-section">
            <h2 className="heading-2">Featured <span className="text-gradient">Projects</span></h2>
            <div className="featured-grid">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className="featured-project">
                  <div className="project-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="250" fill="#2A2A2A"/>
                            <rect x="150" y="100" width="100" height="50" rx="8" fill="#4F9EFF"/>
                            <text x="200" y="130" font-family="Arial" font-size="12" fill="white" text-anchor="middle">Project</text>
                          </svg>
                        `)}`;
                      }}
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View source code"
                        >
                          <FaGithub />
                        </a>
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                            aria-label="View live demo"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Section */}
          <div className="filter-section">
            <div className="filter-header">
              <h2 className="heading-2">All <span className="text-gradient">Projects</span></h2>
              <div className="filter-controls">
                <FaFilter className="filter-icon" />
                <div className="filter-buttons">
                  {filters.map(filter => (
                    <button
                      key={filter.key}
                      className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                      onClick={() => setActiveFilter(filter.key)}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="400" height="250" fill="#2A2A2A"/>
                          <rect x="150" y="100" width="100" height="50" rx="8" fill="#4F9EFF"/>
                          <text x="200" y="130" font-family="Arial" font-size="12" fill="white" text-anchor="middle">Project</text>
                        </svg>
                      `)}`;
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View source code"
                      >
                        <FaGithub />
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View live demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
