import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import './Header.css';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <h2>Portfolio</h2>
        </div>
        
        <nav className={`nav-links ${menuOpen ? 'open glass' : ''}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>{t.header.home}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t.header.about}</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>{t.header.projects}</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>{t.header.skills}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t.header.contact}</a>
          
          <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
            <FiGlobe size={20} />
            <span>{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
        </nav>
        
        <div className="mobile-toggle" onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>
    </header>
  );
};
