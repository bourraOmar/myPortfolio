import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  ArrowRight, Github, Linkedin, Mail, 
  Download, Globe, Cpu, Layers, ExternalLink
} from 'lucide-react';
import { 
  PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS 
} from './constants.js';

const App = () => {
  const [loading, setLoading] = useState(true);
  const heroRef = useRef(null);
  const viewportRef = useRef(null);

  useEffect(() => {
    // Initial loading simulation
    const timer = setTimeout(() => setLoading(false), 1500);
    
    // Custom Cursor Logic
    const cursor = document.getElementById("cursor");
    const follower = document.getElementById("cursor-follower");
    
    const moveCursor = (e) => {
      if (cursor && follower) {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
        gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", moveCursor);

    // Hero Expansion Logic
    if (!loading) {
      gsap.registerPlugin(ScrollTrigger);
      
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "800px top",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          const w = 35 + (65 * p); // Expand from 35vw to 100vw
          const h = 45 + (55 * p); // Expand from 45vh to 100vh
          if (viewportRef.current) {
            viewportRef.current.style.width = `${w}vw`;
            viewportRef.current.style.height = `${h}vh`;
          }
        }
      });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [loading]);

  const handleMouseEnter = () => {
    const cursor = document.getElementById("cursor");
    if (cursor) cursor.classList.add("hovered");
  };
  
  const handleMouseLeave = () => {
    const cursor = document.getElementById("cursor");
    if (cursor) cursor.classList.remove("hovered");
  };

  if (loading) {
    return (
      <div className="initial-loader">
        <div className="spinner"></div>
        <p className="font-display" style={{ fontSize: '0.65rem', letterSpacing: '0.3em' }}>
          STRUCTURAL ENGINE INITIALIZED
        </p>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      {/* Structural Overlays handled in HTML/CSS */}

      {/* Top Navigation */}
      <nav className="nav-fixed">
        <div className="nav-item">{PERSONAL_INFO.name}</div>
        <div className="nav-item">Full Stack Architecture</div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-title font-display uppercase tracking-tighter">
          CREATIVE
        </div>

        <div className="hero-viewport" ref={viewportRef}>
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
            alt="Structural Workspace" 
          />
          <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', fontSize: '0.6rem', letterSpacing: '0.1em', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', backdropFilter: 'blur(5px)' }}>
            SYSTEMS: ONLINE
          </div>
        </div>

        <div className="hero-title font-display uppercase tracking-tighter">
          DEVELOPER
        </div>

        <div style={{ marginTop: '10rem', textAlign: 'center', maxWidth: '400px', opacity: 0.6, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
          <p>{PERSONAL_INFO.profile}</p>
        </div>
      </section>

      {/* About / Objective */}
      <section style={{ padding: '10rem 3rem', background: '#080808' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.65rem', color: '#666', marginBottom: '2rem' }}>// 01. OBJECTIVE</p>
            <h2 className="font-display" style={{ fontSize: '3rem', lineHeight: 1.1, textTransform: 'uppercase' }}>
              I Build <span className="text-transparent-stroke">Logic</span> That Holds Ideas Together.
            </h2>
          </div>
          <div style={{ color: '#999', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '2rem' }}>
              Specialized in modern ecosystems like React/Next.js and Laravel, I focus on performance-first applications. My approach treats code as digital architecture—where stability and aesthetic meet.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {['Frontend Systems', 'Backend API', 'Cloud Deployment', 'UI/UX Logic'].map(item => (
                <div key={item} style={{ border: '1px solid var(--border)', padding: '1rem', fontSize: '0.7rem', textTransform: 'uppercase' }} className="hover-trigger" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects (Archive) */}
      <section className="archive-section">
        <div className="archive-header">
          <h2 className="font-display text-transparent-stroke" style={{ fontSize: '5vw' }}>THE ARCHIVE</h2>
          <span style={{ fontSize: '0.6rem', opacity: 0.4 }}>// CASE STUDIES 2024-25</span>
        </div>

        {PROJECTS.map((project, i) => (
          <div 
            key={i} 
            className="project-large hover-trigger" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info-overlay">
              <h3 className="font-display" style={{ fontSize: '3rem' }}>{project.title}</h3>
              <p style={{ fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                {project.tech.join(' / ')}
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'white' }}>
                   <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Skills (The Arsenal) */}
      <section style={{ padding: '5rem 3rem' }}>
        <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center' }}>
          <h2 className="font-display" style={{ fontSize: '1.5rem' }}>THE ARSENAL</h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)', marginLeft: '2rem' }}></div>
        </div>
        
        <div className="arsenal-grid">
          {SKILLS.map((skill, i) => (
            <div 
              key={i} 
              className="skill-item hover-trigger"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <div className="skill-cat">{skill.category}</div>
              <div className="skill-name">{skill.name}</div>
              <div style={{ fontSize: '0.5rem', color: '#333', textAlign: 'right' }}>0{i+1}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experiences (The Path) */}
      <section style={{ padding: '10rem 3rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="font-display" style={{ fontSize: '2rem', marginBottom: '5rem', textAlign: 'center' }}>THE PATH</h2>
          <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '3rem' }}>
            {EXPERIENCES.map((exp, i) => (
              <div key={i} style={{ marginBottom: '5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-3.35rem', top: '0.5rem', width: '10px', height: '10px', background: 'white', borderRadius: '50%' }}></div>
                <span style={{ fontSize: '0.6rem', color: '#666' }}>{exp.period}</span>
                <h3 className="font-display" style={{ fontSize: '1.25rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>{exp.title}</h3>
                <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}>{exp.company}</p>
                <ul style={{ listStyle: 'none', color: '#888', fontSize: '0.85rem' }}>
                  {exp.description.map((item, j) => (
                    <li key={j} style={{ marginBottom: '0.75rem' }}>— {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <footer className="footer-contact">
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.5em', color: '#444', marginBottom: '3rem' }}>PROJECT INQUIRY</p>
        <a 
          href={`mailto:${PERSONAL_INFO.email}`} 
          className="contact-link font-display hover-trigger"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          LET'S TALK
        </a>

        <div style={{ marginTop: '10rem', display: 'flex', justifyContent: 'center', gap: '3rem' }}>
           <a href={PERSONAL_INFO.linkedin} className="hover-trigger" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ opacity: 0.4 }}>LinkedIn</a>
           <a href={PERSONAL_INFO.github} className="hover-trigger" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ opacity: 0.4 }}>GitHub</a>
        </div>
      </footer>

      {/* Bottom Nav Bar */}
      <nav className="nav-bottom">
        <div className="flex gap-8" style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" className="hover-trigger" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>INDEX</a>
          <a href="#" className="hover-trigger" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>ARCHIVE</a>
          <a href="#" className="hover-trigger" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>PATH</a>
        </div>
        <div style={{ opacity: 0.3 }}>{PERSONAL_INFO.name} &copy; 2025</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Mail size={14} style={{ opacity: 0.5 }} />
          <Globe size={14} style={{ opacity: 0.5 }} />
        </div>
      </nav>
    </div>
  );
};

console.log("App initializing...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
