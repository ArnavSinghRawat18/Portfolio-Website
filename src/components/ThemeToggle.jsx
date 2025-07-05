import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true); // Dark mode by default

  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
  };

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-track">
        <div className={`toggle-thumb ${isDark ? 'dark' : 'light'}`}>
          {isDark ? <FaMoon /> : <FaSun />}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
