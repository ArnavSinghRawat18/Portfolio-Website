import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaArrowDown } from 'react-icons/fa';
import './Home.css';

const roles = ['Front-End Developer', 'React Developer', 'JavaScript Expert', 'UI/UX Enthusiast'];

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [weatherLocation, setWeatherLocation] = useState('Unknown Location');
  const [locationError, setLocationError] = useState(null);
  const [showLocationAlert, setShowLocationAlert] = useState(false);
  const [weatherPermissionGranted, setWeatherPermissionGranted] = useState(false);
  const [weatherPermissionDenied, setWeatherPermissionDenied] = useState(false);
  const [quote, setQuote] = useState(null);
  const [typewriterText, setTypewriterText] = useState('');
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Digital Clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Function to fetch weather by coordinates
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

  const fetchWeatherWithPermission = useCallback(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByLocation(latitude, longitude);
        },
        (error) => {
          console.error('Geolocation error:', error);
          setLocationError('Unable to get your location');
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // Cache for 5 minutes
        }
      );
    } else {
      setLocationError('Geolocation not supported by your browser');
    }
  }, []);

  // Weather API with User Location
  useEffect(() => {
    // Check if user previously granted or denied permission
    const savedPermission = localStorage.getItem('weatherPermission');
    if (savedPermission === 'granted') {
      setWeatherPermissionGranted(true);
      fetchWeatherWithPermission();
    } else if (savedPermission === 'denied') {
      setWeatherPermissionDenied(true);
    } else {
      // Show alert to ask for permission
      setShowLocationAlert(true);
    }
  }, [fetchWeatherWithPermission]);

  // Function to handle location permission request
  const handleAllowLocation = () => {
    setShowLocationAlert(false);
    setWeatherPermissionGranted(true);
    setWeatherPermissionDenied(false);
    localStorage.setItem('weatherPermission', 'granted');
    fetchWeatherWithPermission();
  };

  const handleDenyLocation = () => {
    setShowLocationAlert(false);
    setWeatherPermissionDenied(true);
    setWeatherPermissionGranted(false);
    localStorage.setItem('weatherPermission', 'denied');
  };

  const handleEnableWeather = () => {
    setWeatherPermissionDenied(false);
    setWeatherPermissionGranted(true);
    localStorage.setItem('weatherPermission', 'granted');
    fetchWeatherWithPermission();
  };

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
  }, [typewriterText, isDeleting, currentRoleIndex]);

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
    { icon: <FaGithub />, url: 'https://github.com/ArnavSinghRawat18', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/arnav-singh-rawat-993725275/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://x.com/ArnavSinghRawa1', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/a.r.n.a.v_s.i.n.g.h_r.a.w.a.t/', label: 'Instagram' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/919343612820', label: 'WhatsApp' }
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

      {/* Location Permission Alert */}
      {showLocationAlert && (
        <div className="location-alert">
          <div className="location-alert-content">
            <div className="alert-icon">📍</div>
            <div className="alert-text">
              <h3>Enable Location Access</h3>
              <p>To use full features of the website including live weather updates, please allow location access.</p>
            </div>
            <div className="alert-actions">
              <button className="btn btn-primary btn-small" onClick={handleAllowLocation}>
                Allow Location
              </button>
              <button className="btn btn-secondary btn-small" onClick={handleDenyLocation}>
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

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
                Computer Science student passionate about Front-End Development with React, JavaScript, and modern web technologies.
                Enthusiastic about learning, creating responsive user interfaces, and building innovative projects.
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
              {weatherPermissionGranted ? (
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
                      <button 
                        className="retry-location-btn"
                        onClick={fetchWeatherWithPermission}
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
              ) : weatherPermissionDenied ? (
                <div className="info-card weather-card weather-disabled">
                  <h3>Weather</h3>
                  <div className="weather-permission-message">
                    <p>Weather is disabled</p>
                    <button 
                      className="btn btn-primary btn-small"
                      onClick={handleEnableWeather}
                    >
                      Enable Weather
                    </button>
                  </div>
                </div>
              ) : null}

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
