import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import StarBackground from '../components/StarBackground';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Download } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <StarBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 max-w-[1400px] mx-auto">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-nft-purple/10 rounded-full blur-[100px] -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm"
                >
                    <Sparkles className="w-5 h-5" />
                    <span>Security Operations & Threat Detection</span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight"
                >
                    SOC Analyst | <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-nft-purple">
                        Security Operations
                    </span> <br />
                    & Threat Detection
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed"
                >
                    Cybersecurity undergraduate with hands-on experience in SIEM monitoring, endpoint telemetry analysis, and security investigations.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap items-center gap-6"
                >
                    <a href="#projects" className="group relative px-8 py-4 bg-primary rounded-full text-white font-bold text-lg overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative flex items-center gap-2">
                            Explore Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    
                    <a href="#about" className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                            <Play className="w-5 h-5 fill-current" />
                        </div>
                        <span className="font-medium">About Me</span>
                    </a>

                    <a 
                        href="/resume/Lokith_Duraisamy_Cybersecurity_Resume.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                        title="Download Resume (PDF)"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                            <Download className="w-5 h-5" />
                        </div>
                        <span className="font-medium tracking-wide">Download CV</span>
                    </a>
                </motion.div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5 relative">
                {/* Main Image Container */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-nft-purple rounded-[3rem] blur-2xl opacity-40 transform rotate-6"></div>
                    <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-dark-secondary aspect-[4/5]">
                        <img 
                            src="/profile.jpg" 
                            alt="Lokith Duraisamy Profile" 
                            className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                        />
                        
                        {/* Overlay Gradient at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80"></div>
                        
                        {/* Name on Image */}
                        <div className="absolute bottom-8 left-8">
                             <h2 className="text-4xl font-bold text-white mb-1">LOKITH</h2>
                             <p className="text-primary font-medium tracking-wider">DURAISAMY</p>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Info Card (Repositioned to lower-right to avoid obscuring the face) */}
                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -right-4 lg:-right-8 bottom-6 z-20 w-64 bg-glass border border-white/10 backdrop-blur-xl p-5 rounded-2xl hidden md:block shadow-2xl shadow-black/60"
                >
                    <div className="flex justify-between items-start mb-3">
                        <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">About Profile</span>
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 leading-none">SOC ANALYST<br/>BLUE TEAM</h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-3">
                        Specializing in endpoint detection, SIEM monitoring, and incident investigation.
                    </p>
                    <ArrowRight className="w-5 h-5 text-primary" />
                </motion.div>
            </div>
        </div>
      </section>

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
