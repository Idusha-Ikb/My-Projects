import React from 'react';
import './Portfolio.css';

const projectsData = [
  {
    id: 1,
    icon: '🚚',
    category: 'MOBILE APP DEVELOPMENT',
    title: 'IoT-Based Real-Time Container Monitoring and Anti-Theft System',
    tags: ['Flutter', 'Dart', 'Firebase'],
    description:
      'Developed the Driver Portal of the mobile application using Flutter and Firebase for an IoT-based container monitoring and anti-theft system built for Sri Lanka Customs. The app provides drivers with real-time container status, GPS tracking, trip management, and instant alerts via Firebase Cloud Messaging.',
  },
  {
    id: 2,
    icon: '💻',
    category: 'FRONTEND',
    title: 'Interactive Portfolio Website',
    tags: ['React', 'HTML', 'CSS'],
    description:
      'Designed and developed a highly modern, responsive personal portfolio website utilizing React, HTML, and CSS. Features a seamless layout with smooth keyframe animations, dynamic content rendering, interactive UI components, and tailored visual aesthetics to deliver an exceptional, intuitive user experience across all device screen sizes.',
  },
    {
    id: 3,
    icon: '🧮',
    category: 'FRONTEND',
    title: 'Simple Calculator App',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A lightweight, fully functional web calculator crafted with clean HTML, CSS, and vanilla JavaScript. Focuses on an intuitive user experience, featuring structured button grids, keyboard key-binding shortcuts, dynamic expression updating, and sleek visual hover states for effortless computation.',
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon">💼</span> MY PROJECTS
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Here are some of the projects I've built using my core technologies.
            Each project reflects my passion for clean code and creative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="card-top-bar">
                <span className="card-icon">{project.icon}</span>
                <span className="badge category-badge">{project.category}</span>
              </div>

              <h3 className="card-title">{project.title}</h3>

              <div className="tech-stack">
                {project.tags.map((tag, index) => (
                  <span className="badge tech-badge" key={index}>
                    {tag}
                  </span>
                ))}
              </div>

              <p className="card-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}