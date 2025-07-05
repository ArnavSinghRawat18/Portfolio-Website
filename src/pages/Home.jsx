import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaArrowDown } from 'react-icons/fa';
import './Home.css';

const roles = ['Front-End Developer', 'React Developer', 'JavaScript Expert', 'UI/UX Enthusiast'];

const Home = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Typewriter Effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && typewriterText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typewriterText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (isDeleting) {
        setTypewriterText(currentRole.substring(0, typewriterText.length - 1));
      } else {
        setTypewriterText(currentRole.substring(0, typewriterText.length + 1));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, currentRoleIndex]);

  // Scroll tracking for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/ArnavSinghRawat18', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/arnav-singh-rawat-993725275/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://x.com/ArnavSinghRawa1', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/a.r.n.a.v_s.i.n.g.h_r.a.w.a.t/', label: 'Instagram' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/919343612820', label: 'WhatsApp' }
  ];

  return (
    <div className="home">
      {/* Animated Background with Parallax */}
      <div className="animated-background">
        <div 
          className="floating-shape shape-1"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="floating-shape shape-2"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        ></div>
        <div 
          className="floating-shape shape-3"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        ></div>
        <div 
          className="floating-shape shape-4"
          style={{ transform: `translateY(${scrollY * -0.12}px)` }}
        ></div>
        <div 
          className="gradient-orb orb-1"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>
        <div 
          className="gradient-orb orb-2"
          style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        ></div>
      </div>

      <div className="container">
        <div className="home-content">
          {/* Main Hero Section */}
          <div className="hero-section">
            <div className="hero-text">
              <h1 className="hero-name scroll-animate">
                Hi, I'm <span className="text-gradient animate-text enhanced-name-animation">Arnav Singh Rawat</span>
              </h1>
              <div className="hero-role scroll-animate">
                <span className="role-text">
                  {typewriterText}
                  <span className="cursor">|</span>
                </span>
              </div>
              <p className="hero-description scroll-animate">
                Computer Science student passionate about Front-End Development with React, JavaScript, and modern web technologies.
                Enthusiastic about learning, creating responsive user interfaces, and building innovative projects.
              </p>
              
              <div className="hero-actions scroll-animate">
                <Link to="/projects" className="btn btn-primary magic-hover">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary magic-hover">
                  Get In Touch
                </Link>
              </div>

              <div className="social-links scroll-animate">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link bounce-hover"
                    aria-label={link.label}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Animated Coding Illustration */}
            <div className="hero-illustration scroll-animate">
              <div className="coding-workspace">
                {/* Laptop */}
                <div className="laptop">
                  <div className="laptop-screen">
                    <div className="screen-content">
                      <div className="code-editor">
                        <div className="editor-header">
                          <div className="window-controls">
                            <span className="control close"></span>
                            <span className="control minimize"></span>
                            <span className="control maximize"></span>
                          </div>
                          <div className="file-name">App.jsx</div>
                        </div>
                        <div className="code-area">
                          <div className="code-line">
                            <span className="line-number">1</span>
                            <span className="code-text">
                              <span className="keyword">import</span> <span className="variable">React</span> <span className="keyword">from</span> <span className="string">'react'</span>
                            </span>
                          </div>
                          <div className="code-line">
                            <span className="line-number">2</span>
                            <span className="code-text">
                              <span className="keyword">import</span> <span className="string">'./App.css'</span>
                            </span>
                          </div>
                          <div className="code-line">
                            <span className="line-number">3</span>
                            <span className="code-text"></span>
                          </div>
                          <div className="code-line">
                            <span className="line-number">4</span>
                            <span className="code-text">
                              <span className="keyword">function</span> <span className="function">App</span>() &#123;
                            </span>
                          </div>
                          <div className="code-line">
                            <span className="line-number">5</span>
                            <span className="code-text">
                              &nbsp;&nbsp;<span className="keyword">return</span> (
                            </span>
                          </div>
                          <div className="code-line">
                            <span className="line-number">6</span>
                            <span className="code-text">
                              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;div</span> <span className="attribute">className</span>=<span className="string">"App"</span><span className="tag">&gt;</span>
                            </span>
                          </div>
                          <div className="code-line typing-animation">
                            <span className="line-number">7</span>
                            <span className="code-text">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;h1&gt;</span><span className="typing-cursor">|</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="laptop-base"></div>
                </div>

                {/* Floating Code Elements */}
                <div className="floating-code-elements">
                  <div className="code-bubble bubble-1">
                    <span>&lt;React /&gt;</span>
                  </div>
                  <div className="code-bubble bubble-2">
                    <span>{ }</span>
                  </div>
                  <div className="code-bubble bubble-3">
                    <span>CSS3</span>
                  </div>
                  <div className="code-bubble bubble-4">
                    <span>JS</span>
                  </div>
                </div>

                {/* Coffee Cup */}
                <div className="coffee-cup">
                  <div className="cup-body">
                    <div className="coffee-liquid"></div>
                    <div className="coffee-steam">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="cup-handle"></div>
                </div>

                {/* Mouse */}
                <div className="computer-mouse">
                  <div className="mouse-click-effect"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Explore More Button */}
          <div className="explore-section scroll-animate">
            <Link to="/about" className="explore-btn pulse-animation">
              <span>Explore More</span>
              <FaArrowDown className="arrow-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
