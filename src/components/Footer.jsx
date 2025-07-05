import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/arnavsinghrawat',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/arnavsinghrawat',
      label: 'LinkedIn'
    },
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com/arnavsinghrawat',
      label: 'Twitter'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title text-gradient">Arnav Singh Rawat</h3>
            <p className="footer-description">
              Frontend Developer crafting responsive web experiences with modern technologies.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about">About</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Arnav Singh Rawat. Made with <FaHeart className="heart-icon" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
