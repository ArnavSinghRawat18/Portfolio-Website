import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [weatherLocation, setWeatherLocation] = useState('Unknown Location');
  const [locationError, setLocationError] = useState(null);
  const [quote, setQuote] = useState(null);
  const [typewriterText, setTypewriterText] = useState('');
  
  const roles = ['Front-End Developer', 'React Developer', 'JavaScript Expert', 'UI/UX Enthusiast'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Digital Clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Weather API with User Location
  useEffect(() => {
    const fetchWeatherByLocation = async (latitude, longitude) => {
      try {
        // Fetch weather data
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius`
        );
        const weatherData = await weatherResponse.json();
        setWeather(weatherData.current_weather);

        // Fetch location name using reverse geocoding
        try {
          const locationResponse = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const locationData = await locationResponse.json();
          const city = locationData.city || locationData.locality || 'Unknown City';
          const country = locationData.countryName || 'Unknown Country';
          setWeatherLocation(`${city}, ${country}`);
        } catch (locationErr) {
          console.error('Location name fetch failed:', locationErr);
          setWeatherLocation(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`);
        }
      } catch (error) {
        console.error('Weather fetch failed:', error);
        setLocationError('Unable to fetch weather data');
      }
    };

    const fetchWeather = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherByLocation(latitude, longitude);
          },
          (error) => {
            console.error('Geolocation error:', error);
            setLocationError('Location access denied');
            // Fallback to default location (NYC)
            fetchWeatherByLocation(40.7128, -74.0060);
            setWeatherLocation('New York City, USA (Default)');
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000 // Cache for 5 minutes
          }
        );
      } else {
        console.error('Geolocation not supported');
        setLocationError('Geolocation not supported');
        // Fallback to default location
        fetchWeatherByLocation(40.7128, -74.0060);
        setWeatherLocation('New York City, USA (Default)');
      }
    };

    fetchWeather();
  }, []);

  // Quote API
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://zenquotes.io/api/random');
        const data = await response.json();
        setQuote(data[0]);
      } catch (error) {
        console.error('Quote fetch failed:', error);
        // Fallback quote
        setQuote({
          q: 'The best way to predict the future is to create it.',
          a: 'Peter Drucker'
        });
      }
    };

    fetchQuote();
  }, []);

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
  }, [typewriterText, isDeleting, currentRoleIndex, roles]);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/arnavsinghrawat', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/arnavsinghrawat', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/arnavsinghrawat', label: 'Twitter' }
  ];

  return (
    <div className="home">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="container">
        <div className="home-content">
          {/* Main Hero Section */}
          <div className="hero-section">
            <div className="hero-text">
              <h1 className="hero-name">
                Hi, I'm <span className="text-gradient">Arnav Singh Rawat</span>
              </h1>
              <div className="hero-role">
                <span className="role-text">
                  {typewriterText}
                  <span className="cursor">|</span>
                </span>
              </div>
              <p className="hero-description">
                Front-End Developer with expertise in React, JavaScript, and modern web technologies.
                Passionate about creating responsive, user-friendly interfaces and delivering exceptional digital experiences.
              </p>
              
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>

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

            <div className="hero-info">
              {/* Digital Clock */}
              <div className="info-card clock-card">
                <h3>Current Time</h3>
                <div className="clock">
                  <div className="time">{formatTime(currentTime)}</div>
                  <div className="date">{formatDate(currentTime)}</div>
                </div>
              </div>

              {/* Weather */}
              <div className="info-card weather-card">
                <h3>Current Weather</h3>
                {weather ? (
                  <div className="weather">
                    <div className="weather-location">{weatherLocation}</div>
                    <div className="temperature">{Math.round(weather.temperature)}°C</div>
                    <div className="weather-desc">
                      Wind: {weather.windspeed} km/h
                    </div>
                  </div>
                ) : locationError ? (
                  <div className="weather-error">
                    <div className="error-text">{locationError}</div>
                    <div className="error-subtitle">Using default location</div>
                    <button 
                      className="retry-location-btn"
                      onClick={() => window.location.reload()}
                      aria-label="Retry location access"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <div className="weather-loading">
                    <div className="loading"></div>
                    <div className="loading-text">Getting your location...</div>
                  </div>
                )}
              </div>

              {/* Quote */}
              {quote && (
                <div className="info-card quote-card">
                  <h3>Daily Inspiration</h3>
                  <div className="quote">
                    <p>"{quote.q}"</p>
                    <span className="author">- {quote.a}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Explore More Button */}
          <div className="explore-section">
            <Link to="/about" className="explore-btn">
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
