
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--color-border)', color: 'var(--color-text-dim)' }}>
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
