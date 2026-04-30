import { useLanguage } from '../../context/LanguageContext';
import { FiArrowRight, FiArrowLeft, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  const { language, t } = useLanguage();
  
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">{t.hero.greeting}</span>
          <br />
          <span className="name">Full-Stack Developer</span>
        </h1>
        
        <p className="hero-description">
          {t.hero.description}
        </p>
        
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            {t.hero.viewWork}
            {language === 'ar' ? <FiArrowLeft /> : <FiArrowRight />}
          </a>
          <a href="#contact" className="btn btn-outline">
            {t.hero.contactMe}
          </a>
        </div>
        
        <div className="hero-social">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FiTwitter size={24} />
          </a>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};
