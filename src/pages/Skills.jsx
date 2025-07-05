import React from 'react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap,
  FaGitAlt, 
  FaGithub,
  FaFigma,
  FaDatabase,
  FaCode
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiMongodb, 
  SiMysql,
  SiPostman,
  SiNetlify,
  SiVercel
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90, color: '#61DAFB' },
        { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#F7DF1E' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
        { name: 'Bootstrap', icon: <FaBootstrap />, level: 85, color: '#7952B3' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80, color: '#06B6D4' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 75, color: '#000000' }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql />, level: 75, color: '#4479A1' },
        { name: 'Database Design', icon: <FaDatabase />, level: 70, color: '#336791' }
      ]
    },
    {
      title: 'Development Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, level: 85, color: '#181717' },
        { name: 'VS Code', icon: <FaCode />, level: 90, color: '#007ACC' },
        { name: 'Postman', icon: <SiPostman />, level: 80, color: '#FF6C37' },
        { name: 'Figma', icon: <FaFigma />, level: 75, color: '#F24E1E' },
        { name: 'Netlify', icon: <SiNetlify />, level: 80, color: '#00C7B7' },
        { name: 'Vercel', icon: <SiVercel />, level: 80, color: '#000000' }
      ]
    }
  ];

  const achievements = [
    {
      title: 'Projects Completed',
      value: '50+',
      description: 'Successful web applications delivered'
    },
    {
      title: 'Years Experience',
      value: '3+',
      description: 'Years of professional development'
    },
    {
      title: 'Technologies',
      value: '15+',
      description: 'Different technologies mastered'
    },
    {
      title: 'Satisfied Clients',
      value: '25+',
      description: 'Happy clients and counting'
    }
  ];

  return (
    <div className="skills">
      <div className="container">
        <div className="skills-content">
          {/* Header */}
          <div className="skills-header">
            <h1 className="heading-1">My <span className="text-gradient">Skills</span></h1>
            <p className="skills-description">
              I'm passionate about learning new technologies and constantly improving my skills. 
              Here's what I've been working with recently.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category">
                <h2 className="category-title">{category.title}</h2>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="skill-item"
                      style={{'--skill-color': skill.color}}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <div className="skill-icon" style={{color: skill.color}}>
                            {skill.icon}
                          </div>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="achievements-section">
            <h2 className="heading-2 text-center">
              My <span className="text-gradient">Achievements</span>
            </h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-value">{achievement.value}</div>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Section */}
          <div className="learning-section">
            <div className="learning-content">
              <h2 className="heading-2">Currently <span className="text-gradient">Learning</span></h2>
              <p>
                I believe in continuous learning and staying up-to-date with the latest technologies. 
                Currently, I'm diving deeper into:
              </p>
              <div className="learning-list">
                <div className="learning-item">
                  <span className="learning-bullet">🚀</span>
                  <span>Advanced React Patterns & Performance Optimization</span>
                </div>
                <div className="learning-item">
                  <span className="learning-bullet">☁️</span>
                  <span>Cloud Architecture with AWS & Serverless</span>
                </div>
                <div className="learning-item">
                  <span className="learning-bullet">📱</span>
                  <span>React Native for Mobile Development</span>
                </div>
                <div className="learning-item">
                  <span className="learning-bullet">🤖</span>
                  <span>AI Integration in Web Applications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
