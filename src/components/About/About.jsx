import { useLanguage } from '../../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about-section">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-content glass">
        <p>{t.about.description}</p>
      </div>
    </section>
  );
};

export default About;
