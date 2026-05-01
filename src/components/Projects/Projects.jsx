import { useLanguage } from '../../context/LanguageContext.jsx';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import projectsData from '../../data/projects.js';
import './Projects.css';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">{t.projects.title}</h2>
      
      <div className="projects-grid">
        {projectsData.map(project => (
          <div key={project.id} className="project-card glass">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary" aria-label="View Live">
                    <FiExternalLink />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" aria-label="View Code">
                    <FiGithub />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
