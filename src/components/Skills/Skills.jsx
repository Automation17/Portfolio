import { useLanguage } from '../../context/LanguageContext';
import { 
  SiReact, SiJavascript, /*SiTypescript,*/ SiHtml5,
  SiNodedotjs, SiMongodb, /*SiPostgresql,*/ SiGithub,
  SiGit, SiDocker, SiCss
} from 'react-icons/si';
import './Skills.css';

const frontendSkills = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiJavascript />, name: "JavaScript" },
  // { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss />, name: "CSS3" }
];

const backendSkills = [
  { icon: <SiNodedotjs />, name: "Node.js" },
  // { icon: <SiPython />, name: "Python" },
  { icon: <SiMongodb />, name: "MongoDB" },
  // { icon: <SiPostgresql />, name: "PostgreSQL" }
];

const toolsSkills = [
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "Github" },
  { icon: <SiDocker />, name: "Docker" }
];

function SkillCategory({ title, skills }) {
  return (
  <div className="skill-category glass">
    <h3>{title}</h3>
    <div className="skill-list">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-icon">{skill.icon}</div>
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">{t.skills.title}</h2>
      
      <div className="skills-container">
        <SkillCategory title={t.skills.frontend} skills={frontendSkills} />
        <SkillCategory title={t.skills.backend} skills={backendSkills} />
        <SkillCategory title={t.skills.tools} skills={toolsSkills} />
      </div>
    </section>
  );
}
