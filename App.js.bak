
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Github, Linkedin, Mail, 
  Download, Globe, Cpu, Layers
} from 'lucide-react';
import { 
  PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS 
} from './constants.js';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-root">
      
      {/* Background Glows */}
      <div className="fixed-bg">
        <div className="glow-radial" style={{ top: '-10%', left: '-10%', width: '60%', height: '60%', opacity: 0.15, filter: 'blur(100px)', '--glow-color': 'var(--accent)' }}></div>
        <div className="glow-radial" style={{ bottom: '-20%', right: '-10%', width: '70%', height: '70%', opacity: 0.1, filter: 'blur(120px)', '--glow-color': 'var(--violet)' }}></div>
        <div className="glow-radial" style={{ top: '30%', right: '10%', width: '40%', height: '40%', opacity: 0.05, filter: 'blur(80px)', '--glow-color': 'var(--gold)' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <div className="logo-icon">O</div>
          <span>{PERSONAL_INFO.name}</span>
        </div>

        <div className="nav-links">
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">Platform</a>
          <a href="#" className="nav-link">Architecture</a>
          <a href="#contact" className="nav-link">
            Lets Talk
            <div className="dot"></div>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="powered-by">
          <span>POWERED BY</span>
          <Cpu size={14} color="var(--accent)" />
          <span>FULL-STACK TECH</span>
        </div>
        
        <h1>
          Empowering projects to<br />
          <span className="text-gradient">craft digital experiences.</span>
        </h1>

        <button className="btn-primary">
          <span>Start Partnering</span>
          <div className="btn-icon">
            <ArrowRight size={18} />
          </div>
        </button>

        <div className="wave-container">
          <div className="light-wave"></div>
          <div className="hero-footer">
            <h2>{PERSONAL_INFO.name.split(' ')[1]}</h2>
            <p>{PERSONAL_INFO.profile}</p>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="container section-padding">
        <div className="section-header">
          <div>
            <p className="label">Case Studies</p>
            <h2 className="section-title">Featured Platform Development</h2>
          </div>
          <p className="header-desc">Innovating with high-performance web architecture and intuitive UX.</p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <div key={i} className="glass-card">
              <div className="card-header">
                <div className="card-icon">
                  <Globe size={32} />
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ opacity: 0.4 }}>
                  <Github size={24} />
                </a>
              </div>

              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.description}</p>
              
              <div className="tags">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="card-image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section-padding">
        <div className="container">
          <div className="skills-header">
            <Layers color="var(--violet)" size={40} style={{ marginBottom: '1.5rem' }} />
            <h2 className="section-title" style={{ textTransform: 'uppercase' }}>Engineered Intelligence</h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '1rem' }}>Our technology infrastructure is built on precision and modern standards.</p>
          </div>

          <div className="skills-grid">
            {SKILLS.map((skill, i) => (
              <div key={i} className="skill-card glass-card">
                <span className="skill-cat">{skill.category}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container section-padding">
        <div className="exp-section">
          <div className="timeline-header">
            <div className="line"></div>
            <h2 className="timeline-title">Professional Path</h2>
            <div className="line"></div>
          </div>

          <div className="timeline">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="exp-item">
                <div className="exp-dot"></div>
                <p className="exp-period">{exp.period}</p>
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-company">{exp.company}</p>
                <ul className="exp-list">
                  {exp.description.map((item, j) => (
                    <li key={j}>
                      <span>—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="footer container">
        <div className="glow-radial" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', opacity: 0.05, filter: 'blur(120px)', '--glow-color': 'var(--violet)' }}></div>
        
        <h2>Lets build<br />the future.</h2>
        
        <div className="footer-btns">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="btn-secondary glass-card">
            <Mail size={18} /> Send Inquiry
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary glass-card">
            <Linkedin size={18} /> LinkedIn
          </a>
          <button className="btn-secondary glass-card">
            <Download size={18} /> Download CV
          </button>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
          <div className="footer-socials">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#">Twitter / X</a>
            <a href="#">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
