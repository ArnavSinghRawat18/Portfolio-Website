import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/ArnavSinghRawat18',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/arnav-singh-rawat-993725275/',
      label: 'LinkedIn'
    },
    {
      icon: <FaTwitter />,
      url: 'https://x.com/ArnavSinghRawa1',
      label: 'Twitter'
    },
    {
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/a.r.n.a.v_s.i.n.g.h_r.a.w.a.t/',
      label: 'Instagram'
    },
    {
      icon: <FaWhatsapp />,
      url: 'https://wa.me/919343612820',
      label: 'WhatsApp'
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
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
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
