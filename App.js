import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
    Github, Linkedin, Mail, ArrowUpRight, 
    Code2, Database, Layout, Terminal, ExternalLink,
    ChevronDown, ArrowRight, Laptop, Briefcase, Smile, Quote
} from 'lucide-react';
import { 
  PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS, EDUCATION, CERTIFICATIONS 
} from './constants.js';

// --- Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// --- Scribble SVGs ---
const ScribbleLine = () => (
    <svg className="absolute -bottom-4 right-0 w-32 h-8 text-blue-600 z-[-1]" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 30C40 10 70 50 100 30C130 10 160 50 190 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="scribble-path"/>
    </svg>
);

const ScribbleCircle = () => (
    <svg className="absolute top-10 right-10 w-24 h-24 text-blue-200 opacity-50 z-[-1]" viewBox="0 0 100 100" fill="none">
        <path d="M50 10C20 10 10 40 10 50C10 80 40 90 50 90C80 90 90 60 90 50C90 20 60 10 50 10Z" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
    </svg>
);

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 py-5 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
      >
        <div className="text-xl font-bold tracking-tight">
          {PERSONAL_INFO.name.split(' ')[1]}<span className="text-blue-600">.</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
        </div>

        <a href="#contact" className="px-5 py-2 border border-slate-200 rounded-full text-sm font-semibold hover:bg-slate-50 hover:border-blue-200 transition-all">
            Let's Talk ↗
        </a>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
                initial="hidden" animate="visible" variants={stagger}
                className="relative z-10"
            >
                <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-bold leading-[0.9] text-slate-900 mb-6 relative inline-block">
                    Full-Stack <br />
                    <span className="text-blue-600">Coder &</span> <br />
                    more <span className="text-blue-400 text-6xl align-top">+</span>
                    <ScribbleLine />
                </motion.h1>

                <motion.div variants={fadeIn} className="flex items-start gap-4 mb-8 max-w-lg">
                    <div className="mt-1">
                        <span className="text-2xl">👋</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">HI, I'M {PERSONAL_INFO.name.split(' ')[0]}</h3>
                        <p className="text-slate-500 leading-relaxed text-lg">
                             I’m a creative developer with over <span className="font-semibold text-slate-900 border-b-2 border-blue-200">2 years experience</span>, based in Morocco. I build robust digital architectures.
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-center gap-6">
                    <a href="#contact" className="btn-primary shadow-blue-500/30">
                        Start a Project <ArrowRight size={18} />
                    </a>
                    
                    <div className="flex -space-x-3">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                <img src={`https://randomuser.me/api/portraits/men/${i*10}.jpg`} alt="Client" />
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-600">
                            +10
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                className="relative h-[600px] flex items-end justify-center lg:justify-end"
            >
                {/* Abstract Background Shapes */}
                <div className="absolute top-10 right-0 w-[400px] h-[500px] bg-blue-100 rounded-[3rem] rotate-3 -z-10" />
                <div className="absolute top-20 right-10 w-[380px] h-[480px] border-2 border-slate-900 rounded-[3rem] -rotate-2 -z-10" />
                
                {/* Profile Image */}
                {/* Placeholder image logic - Using a generic professional avatar if local isn't found, but styling implies cut-out */}
                <img 
                    src="./profile.png" 
                    onError={(e) => {e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"}}
                    alt="Profile" 
                    className="relative z-10 h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Badge */}
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="absolute bottom-20 -left-10 bg-blue-600 text-white p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-xl cursor-pointer z-20"
                >
                    <span className="text-xs font-bold uppercase tracking-wider mb-1">View Work</span>
                    <ArrowUpRight size={24} />
                </motion.div>

                <ScribbleCircle />
            </motion.div>

        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200">
            <div>
                <h4 className="text-4xl font-bold text-slate-900">20+</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-2">Projects Done</p>
            </div>
            <div>
                <h4 className="text-4xl font-bold text-slate-900">1.2k+</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-2">Hours Coding</p>
            </div>
            <div>
                <h4 className="text-4xl font-bold text-slate-900">10+</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-2">Happy Clients</p>
            </div>
            <div className="hidden md:block">
                <h4 className="text-4xl font-bold text-slate-900">02</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-2">Years Exp.</p>
            </div>
        </div>
      </section>

      {/* Services / Solutions */}
      <section id="services" className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-5xl font-bold max-w-md leading-tight">
                    All kind of coding <br />
                    <span className="text-blue-600 underline decoration-wavy decoration-blue-300 underline-offset-8">solution.</span>
                </h2>
                <a href="#contact" className="hidden md:flex items-center gap-2 font-semibold hover:gap-4 transition-all text-blue-600">
                    See All Service <ArrowRight size={18} />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Service 1 */}
                <motion.div whileHover={{ y: -10 }} className="card active p-10 flex flex-col justify-between h-[400px]">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-white">
                        <Layout size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Frontend & UI<br/>Development.</h3>
                        <p className="text-blue-100 text-sm leading-relaxed mb-6 opacity-90">
                            Crafting pixel-perfect, responsive interfaces using React, Next.js and Tailwind CSS.
                        </p>
                        <ul className="space-y-2 text-sm font-medium">
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"/> React / Next.js</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"/> Tailwind CSS</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"/> Framer Motion</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Service 2 */}
                <motion.div whileHover={{ y: -10 }} className="card bg-slate-50 border border-slate-100 p-10 flex flex-col justify-between h-[400px]">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm">
                        <Database size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Backend & API<br/>Architecture.</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Building robust server-side logic and scalable databases with Laravel and Node.js.
                        </p>
                        <ul className="space-y-2 text-sm font-medium text-slate-600">
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-600 rounded-full"/> Laravel / PHP</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-600 rounded-full"/> Express / NestJS</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-600 rounded-full"/> PostgreSQL / MySQL</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Service 3 */}
                <motion.div whileHover={{ y: -10 }} className="card bg-slate-50 border border-slate-100 p-10 flex flex-col justify-between h-[400px]">
                     <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm">
                        <Terminal size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">DevOps & <br/>Methodology.</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Ensuring code quality and deployment efficiency with modern tools.
                        </p>
                        <ul className="space-y-2 text-sm font-medium text-slate-600">
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-600 rounded-full"/> Git / GitHub</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-600 rounded-full"/> Docker / CI/CD</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-600 rounded-full"/> Agile Scrum</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="work" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
             <div className="mb-20">
                <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Portfolio</span>
                <h2 className="text-5xl font-bold">Explore My Top <br/> Creations 
                    <svg className="inline-block w-12 h-12 ml-4 text-blue-600 transform rotate-12" viewBox="0 0 100 100" fill="none">
                        <path d="M10 50 Q 50 10 90 50 T 90 90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </h2>
             </div>

             <div className="space-y-32">
                {PROJECTS.map((project, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                        {/* Text Side */}
                        <div className="flex-1 space-y-6">
                            <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wider">
                                {project.tech[0]}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                {project.title} <br/> Development.
                            </h3>
                            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                                {project.description}
                            </p>
                            
                            <div className="flex gap-4 pt-4">
                                <a href={project.github} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all hover:border-slate-900">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all hover:border-slate-900">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Image Side */}
                        <motion.div 
                            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 2 : -2 }}
                            className="flex-1 w-full"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white aspect-[4/3]">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                    <span className="text-white font-bold text-xl">View Case Study</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <a href="#" className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:gap-4 transition-all">
                    View All Projects <ArrowRight size={18} />
                </a>
            </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Scribbles */}
         <div className="absolute top-10 left-10 opacity-20 transform -rotate-12">
            <svg width="200" height="100">
                <path d="M10 50 Q 50 10 90 50 T 170 50" stroke="#2563eb" fill="none" strokeWidth="2" />
            </svg>
         </div>
         
         <div className="absolute bottom-10 right-10 opacity-20">
             <div className="w-32 h-32 rounded-full border-2 border-blue-600 border-dashed animate-spin-slow"></div>
         </div>

        <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
                Anything in Mind? <br/>
                <span className="relative inline-block">
                    Let's Talk.
                    <svg className="absolute w-full h-4 -bottom-2 left-0 text-blue-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                </span>
            </h2>

            <div className="flex justify-center gap-6 mb-16">
                 <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-xl">
                    <Mail size={20} /> Email Me
                 </a>
                 <a href={PERSONAL_INFO.linkedin} className="flex items-center gap-3 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} /> LinkedIn
                 </a>
            </div>

            <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <span className="bg-black text-white font-bold p-1 rounded text-xs">OB</span>
                    <span>Bourra Omar © {new Date().getFullYear()}</span>
                </div>

                <div className="flex gap-4">
                    <p className="max-w-xs text-center md:text-right text-xs leading-relaxed">
                        Today, improve your business <br/> with quality.
                    </p>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
