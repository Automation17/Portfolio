import { useLanguage } from '../../context/LanguageContext';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    live: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates and drag-and-drop features.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
    live: "#",
    github: "#"
  },
  {
    id: 3,
    title: "AI Dashboard",
    description: "Analytics dashboard powered by AI to provide insights into data patterns.",
    tech: ["Next.js", "Python", "TensorFlow", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    live: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Social Network",
    description: "A social media application with messaging, posts, and real-time notifications.",
    tech: ["React Native", "GraphQL", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    live: "#",
    github: "#"
  }
];

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
