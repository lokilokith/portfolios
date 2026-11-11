import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeout;
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return <span>{displayText}</span>;
};

const TiltCard = ({ children, className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        const xPct = mouseXFromCenter / width;
        const yPct = mouseYFromCenter / height;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative transition-all duration-200 ease-linear ${className}`}
        >
            <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} className="h-full">
                {children}
            </div>
        </motion.div>
    );
};

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden" style={{ perspective: "1000px" }}>
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                     <h2 className="text-secondary font-display text-4xl mb-2">About Me</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Card 1: Code Editor Profile (Interactive Typewriter) */}
                    <div className="md:col-span-2">
                        <TiltCard className="bg-dark-secondary rounded-3xl p-8 border border-white/10 overflow-hidden group hover:border-primary/50 h-full">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors -z-10"></div>
                             
                             <div className="flex gap-2 mb-6">
                                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
                             </div>
                             
<div className="font-mono text-xs sm:text-sm md:text-base text-gray-300 space-y-1.5 relative z-10">
  <p><span className="text-pink-500">const</span> <span className="text-blue-400">analyst</span> = <span className="text-yellow-400">{"{"}</span></p>
  <p className="pl-6">name: <span className="text-green-400"><TypewriterText text="Lokith Duraisamy" delay={500} /></span>,</p>
  <p className="pl-6">role: <span className="text-green-400"><TypewriterText text="SOC Analyst" delay={1500} /></span>,</p>
  <p className="pl-6">degree: <span className="text-green-400">"B.Tech CSE (Cyber Security)"</span>,</p>
  <p className="pl-6">institution: <span className="text-green-400">"Parul University"</span>,</p>
  <p className="pl-6">status: <span className="text-orange-400">"Pursuing"</span>,</p>
  <p className="pl-6">expectedGraduation: <span className="text-orange-400">"May 2027"</span>,</p>
  <p className="pl-6">focus: <span className="text-yellow-400">['Detection', 'DFIR', 'SIEM']</span></p>
  <p><span className="text-yellow-400">{"}"}</span>;</p>
</div>

                             <div className="mt-8">
                                 <h3 className="text-2xl font-bold text-white mb-2">Hi, I'm Lokith</h3>
                                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                     Cybersecurity undergraduate at Parul University specializing in SOC operations, endpoint telemetry analysis with Sysmon and Wazuh, and incident triage.
                                 </p>
                             </div>
                        </TiltCard>
                    </div>

                    {/* Card 2: Technical Approach */}
                    <div className="h-full">
                        <TiltCard className="bg-dark-secondary rounded-3xl p-8 border border-white/10 overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:shadow-nft-purple/20 h-full">
                             <div className="absolute bottom-0 right-0 w-40 h-40 bg-nft-purple/20 rounded-full blur-3xl group-hover:bg-nft-purple/40 transition-colors -z-10"></div>
  
                             <div className="relative z-10 h-full flex flex-col justify-between">
                                 <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Technical Approach</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        Hands-on with endpoint telemetry, log correlation, and incident triage using Sysmon, Wazuh, and Splunk to investigate suspicious execution patterns and reconstruct incident timelines.
                                    </p>
                                 </div>
                                 
                                 <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2 items-center justify-between text-xs text-gray-500 font-mono">
                                     <span>SIEM MONITORING</span>
                                     <span>ENDPOINT TELEMETRY</span>
                                     <span>INCIDENT INVESTIGATION</span>
                                 </div>
                             </div>
                        </TiltCard>
                    </div>

                    {/* Card 3: Full-Width Collaboration CTA Banner (Modern Editorial) */}
                    <div className="md:col-span-3 h-full">
                        <TiltCard className="rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden group shadow-lg hover:shadow-primary/25 h-full bg-[#111116] border border-[#45405A]" >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700 -z-10"></div>
                            <div className="relative z-10 text-center md:text-left" style={{ transform: "translateZ(50px)" }}>
                                <p className="uppercase text-sm mb-1" style={{ color: '#B69AFF' }}>01 / CONTACT</p>
                                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#FFFFFF', marginBottom: '0.5rem' }}>Let's build something that makes a difference.</h3>
                                <p className="text-base" style={{ color: '#B6B3C4', marginBottom: '1rem' }}>
                                    Interested in working together? I'm open to cybersecurity opportunities and professional collaborations.
                                </p>
                                <a
                                    href="#contact"
                                    style={{ transform: "translateZ(80px)" }}
                                    className="relative z-10 flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base bg-[#30254A] text-[#D2BFFF] border border-transparent hover:border-[#B69AFF] hover:bg-[#30254A] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B69AFF]"
                                >
                                    <span style={{ color: '#D2BFFF' }}>Start a Conversation ↗</span>
                                    <ArrowUpRight className="w-5 h-5" style={{ color: '#D2BFFF' }} />
                                </a>
                            </div>
                        </TiltCard>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;