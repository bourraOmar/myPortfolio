import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Mail, ArrowUpRight, 
  Code2, Database, Layout, Terminal, ExternalLink,
  ChevronDown
} from 'lucide-react';
import { 
  PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS, EDUCATION, CERTIFICATIONS 
} from './constants.js';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 transition-all duration-300 ${scrolled ? 'glass bg-opacity-80' : 'bg-transparent'}`}
      style={{ backdropFilter: scrolled ? 'blur(10px)' : 'none' }}
    >
      <div className="text-2xl font-bold font-serif italic tracking-tighter">
        {PERSONAL_INFO.name.split(' ')[1]}<span className="text-secondary text-accent-primary">.</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
      <a 
        href={`mailto:${PERSONAL_INFO.email}`} 
        className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium"
      >
        Let's Talk
      </a>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <motion.p variants={fadeInUp} className="text-accent-primary tracking-[0.2em] text-sm uppercase mb-6 font-medium">
                Full Stack Developer
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
                Crafting digital <br />
                <span className="text-gradient">experiences</span> that matter.
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-xl mx-auto text-gray-400 text-lg mb-12 leading-relaxed">
                {PERSONAL_INFO.profile}
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
                <a href="#work" className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform">
                    View Work
                    <ChevronDown className="group-hover:translate-y-1 transition-transform" size={18} />
                </a>
                <a href="#contact" className="flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                    Contact Me
                </a>
            </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

const TechStack = () => {
    // Group skills by category
    const categories = Array.from(new Set(SKILLS.map(s => s.category)));

    return (
        <section className="py-20 border-t border-white/5">
            <div className="container">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {categories.map((cat, i) => (
                        <motion.div key={i} variants={fadeInUp} className="space-y-4">
                            <h3 className="text-accent-primary text-sm uppercase tracking-wider">{cat}</h3>
                            <div className="flex flex-wrap gap-2 text-gray-300">
                                {SKILLS.filter(s => s.category === cat).map((skill, j) => (
                                    <span key={j} className="block text-lg font-medium hover:text-white transition-colors cursor-default">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

const Projects = () => {
  return (
    <section id="work" className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-gray-400">A collection of projects that challenge the status quo.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-accent-primary transition-colors">{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                    <Github size={18} />
                  </a>
                </div>
                
                <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white/5 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold mb-4 sticky top-32">Experience & Education</h2>
          </div>
          
          <div className="md:w-2/3 space-y-16">
            <div>
                <h3 className="text-xl font-serif text-accent-primary mb-8 italic">Professional Journey</h3>
                <div className="space-y-12">
                {EXPERIENCES.map((exp, i) => (
                    <div key={i} className="relative pl-8 border-l border-white/10">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-accent-primary rounded-full" />
                    <span className="text-sm text-gray-500 mb-2 block">{exp.period}</span>
                    <h4 className="text-xl font-bold">{exp.title}</h4>
                    <p className="text-gray-400 mb-4">{exp.company} • {exp.location}</p>
                    <ul className="space-y-2">
                        {exp.description.map((desc, j) => (
                        <li key={j} className="text-gray-300 text-sm leading-relaxed">• {desc}</li>
                        ))}
                    </ul>
                    </div>
                ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-serif text-accent-primary mb-8 italic">Education</h3>
                <div className="space-y-8">
                {EDUCATION.map((edu, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
                        <div className="md:w-3/4">
                            <h4 className="text-lg font-medium">{edu.degree}</h4>
                            <p className="text-gray-400 text-sm">{edu.institution}</p>
                        </div>
                        <span className="text-sm text-gray-500 whitespace-nowrap">{edu.period}</span>
                    </div>
                ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-serif text-accent-primary mb-8 italic">Certifications</h3>
                <div className="space-y-4">
                {CERTIFICATIONS.map((cert, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
                        <div>
                            <h4 className="text-lg font-medium">{cert.title}</h4>
                            <p className="text-gray-400 text-sm">{cert.issuer}</p>
                        </div>
                        <span className="text-sm text-gray-500">{cert.year}</span>
                    </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-20 border-t border-white/10">
      <div className="container text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 font-heading">
          Let's work <br/> <span className="text-gray-500">together.</span>
        </h2>
        
        <div className="flex justify-center gap-6 mb-16">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
          >
            <Mail size={20} />
            {PERSONAL_INFO.email}
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 pt-8 border-t border-white/5">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="app-root text-white min-h-screen selection:bg-accent-primary selection:text-black">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
