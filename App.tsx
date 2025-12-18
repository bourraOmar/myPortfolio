
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Github, Linkedin, Mail, 
  ExternalLink, Download, Globe, Cpu, Layers
} from 'lucide-react';
import { 
  PERSONAL_INFO, SKILLS, EXPERIENCES, EDUCATION, PROJECTS 
} from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-brand-black text-white selection:bg-brand-accent selection:text-black">
      
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] glow-radial opacity-[0.15] blur-[100px]" style={{ '--glow-color': '#00f2ff' } as any}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] glow-radial opacity-[0.1] blur-[120px]" style={{ '--glow-color': '#7000ff' } as any}></div>
        <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] glow-radial opacity-[0.05] blur-[80px]" style={{ '--glow-color': '#ffb800' } as any}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-6 px-8 md:px-16 flex justify-between items-center ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : ''}`}>
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-black rounded-sm transition-transform group-hover:rotate-12">O</div>
          <span className="font-bold tracking-tighter text-lg uppercase">{PERSONAL_INFO.name}</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Features', 'Platform', 'Blockchain Development', 'Lets Talk'].map((item) => (
            <a 
              key={item} 
              href={item === 'Lets Talk' ? '#contact' : '#'} 
              className="text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-2"
            >
              {item}
              {item === 'Lets Talk' && <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></div>}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6">
        <div className="text-center max-w-4xl z-10">
          <div className="flex items-center justify-center gap-3 mb-8 opacity-60">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">POWERED BY</span>
            <div className="flex items-center gap-1">
              <Cpu size={14} className="text-brand-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Full-Stack Tech</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-12">
            Empowering projects to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
              craft digital experiences.
            </span>
          </h1>

          <button className="group relative flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-8 py-4 transition-all btn-glow mb-24">
            <span className="text-sm font-bold tracking-widest uppercase">Start Partnering</span>
            <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight size={18} />
            </div>
          </button>
        </div>

        {/* Animated Light Tube Wave */}
        <div className="w-full max-w-5xl px-12 relative flex flex-col items-center">
          <div className="light-wave mb-12 opacity-80"></div>
          
          {/* Brand Logo Display mimicking the center text in Kavana screenshot */}
          <div className="text-center group cursor-default">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 uppercase">
              {PERSONAL_INFO.name.split(' ')[1]}
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-white/50 leading-relaxed font-medium">
              {PERSONAL_INFO.profile}
            </p>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="py-32 px-8 md:px-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-12">
            <div>
              <p className="text-brand-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Case Studies</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Featured Platform Development</h2>
            </div>
            <p className="text-white/40 max-w-xs text-right text-sm">Innovating with high-performance web architecture and intuitive UX.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {PROJECTS.map((project, i) => (
              <div key={i} className="glass-card rounded-[2.5rem] p-8 md:p-12 group overflow-hidden relative">
                {/* Internal Glow on Hover */}
                <div className="absolute top-0 right-0 w-64 h-64 glow-radial opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ '--glow-color': '#00f2ff' } as any}></div>
                
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-accent group-hover:text-black transition-all duration-500">
                    <Globe size={32} />
                  </div>
                  <a href={project.github} className="opacity-40 hover:opacity-100 transition-opacity">
                    <Github size={24} />
                  </a>
                </div>

                <h3 className="text-3xl font-black tracking-tighter mb-4 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                <p className="text-white/50 mb-10 leading-relaxed max-w-md">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-white/5 rounded-full border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack / Skills */}
      <section className="py-32 px-8 md:px-16 bg-brand-gray/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <Layers className="mx-auto text-brand-violet mb-6" size={40} />
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Engineered Intelligence</h2>
            <p className="text-white/40">Our technology infrastructure is built on precision and modern standards.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {SKILLS.map((skill, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 group">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-4 group-hover:text-brand-accent transition-colors">{skill.category}</span>
                <span className="font-bold text-sm uppercase tracking-widest">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[1px] flex-1 bg-white/10"></div>
            <h2 className="text-2xl font-black tracking-tighter uppercase italic">Professional Path</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          <div className="space-y-20">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative pl-12 border-l border-white/10 group">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-brand-accent rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_#00f2ff]"></div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase mb-2">{exp.period}</p>
                <h3 className="text-2xl font-black tracking-tighter mb-1">{exp.title}</h3>
                <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">{exp.company}</p>
                <ul className="space-y-4">
                  {exp.description.map((item, j) => (
                    <li key={j} className="text-white/50 text-sm leading-relaxed flex gap-3">
                      <span className="opacity-20">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="relative py-32 px-8 md:px-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full glow-radial opacity-[0.05] blur-[120px]" style={{ '--glow-color': '#7000ff' } as any}></div>
        
        <div className="max-w-7xl mx-auto text-center z-10 relative">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-12">
            Lets build<br />the future.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 mb-24">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="glass-card px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all flex items-center gap-3">
              <Mail size={18} /> Send Inquiry
            </a>
            <a href={PERSONAL_INFO.linkedin} className="glass-card px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-accent hover:text-black transition-all flex items-center gap-3">
              <Linkedin size={18} /> LinkedIn
            </a>
            <button className="glass-card px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-black transition-all flex items-center gap-3">
              <Download size={18} /> Download CV
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 opacity-40 text-[10px] font-bold tracking-[0.5em] uppercase">
            <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
            <div className="flex gap-12">
              <a href={PERSONAL_INFO.github} className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
              <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
