import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">{t.contact.title}</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card glass">
            <FiMail className="info-icon" />
            <h3>{t.contact.email}</h3>
            <p>hello@example.com</p>
          </div>
          
          <div className="info-card glass">
            <FiPhone className="info-icon" />
            <h3>{t.contact.phone}</h3>
            <p>+1 234 567 890</p>
          </div>
          
          <div className="info-card glass">
            <FiMapPin className="info-icon" />
            <h3>{t.contact.location}</h3>
            <p>San Francisco, CA</p>
          </div>
        </div>
        
        <form className="contact-form glass" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.formName} 
              required 
            />
          </div>
          
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contact.formEmail} 
              required 
            />
          </div>
          
          <div className="form-group">
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contact.formMessage} 
              rows="5" 
              required
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
            {isSubmitting ? t.contact.sending : t.contact.send}
            <FiSend />
          </button>
          
          {submitted && (
            <div className="success-message">
              {t.contact.successMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
