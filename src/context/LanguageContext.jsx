import { createContext, useState, useEffect, useContext } from 'react';
import { en } from '../data/en';
import { ar } from '../data/ar';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default to Arabic
  const [language, setLanguage] = useState('ar');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  useEffect(() => {
    // Update document direction and language based on selection
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = language === 'en' ? en : ar;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
