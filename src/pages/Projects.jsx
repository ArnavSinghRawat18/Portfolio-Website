import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A responsive e-commerce website with modern UI/UX, product catalog, shopping cart, and checkout functionality.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'CSS3', 'JavaScript', 'Bootstrap'],
      category: 'frontend',
      githubUrl: 'https://github.com/arnavsinghrawat',
      liveUrl: 'https://ecommerce-demo.netlify.app',
      featured: true
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      description: 'A fully responsive portfolio website showcasing projects, skills, and professional experience with dark/light theme.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'CSS3', 'JavaScript', 'React Router'],
      category: 'frontend',
      githubUrl: 'https://github.com/arnavsinghrawat',
      liveUrl: 'https://arnavportfolio.netlify.app',
      featured: true
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'A weather application with real-time data, location-based forecasts, and responsive design.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'Weather API', 'CSS3', 'JavaScript'],
      category: 'frontend',
      githubUrl: 'https://github.com/arnavsinghrawat',
      liveUrl: 'https://weather-app-demo.netlify.app',
      featured: false
    },
    {
      id: 4,
      title: 'Todo List Application',
      description: 'A feature-rich todo application with CRUD operations, local storage, and intuitive user interface.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'CSS3', 'Local Storage', 'JavaScript'],
      category: 'frontend',
      githubUrl: 'https://github.com/arnavsinghrawat',
      liveUrl: 'https://todo-app-demo.netlify.app',
      featured: false
    },
    {
      id: 5,
      title: 'Restaurant Website',
      description: 'A modern restaurant website with menu display, online reservation system, and responsive design.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      category: 'frontend',
      githubUrl: 'https://github.com/arnavsinghrawat',
      liveUrl: 'https://restaurant-demo.netlify.app',
      featured: false
    },
    {
      id: 6,
      title: 'Landing Page Collection',
      description: 'A collection of responsive landing pages for various business types with modern UI/UX design.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      category: 'frontend',
      githubUrl: 'https://github.com/arnavsinghrawat',
      liveUrl: 'https://landing-pages-demo.netlify.app',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
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
              Here are some of the projects I've worked on recently. Each project represents 
              a unique challenge and learning opportunity.
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
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View live demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
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
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View live demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
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
