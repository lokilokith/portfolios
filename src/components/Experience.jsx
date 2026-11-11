import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar } from 'lucide-react';

const ExperienceCard = ({ data, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`flex items-center justify-between mb-16 w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
        >
            <div className="w-5/12"></div>
            
            <div className="z-20 flex items-center justify-center w-12 h-12 bg-dark border-4 border-primary rounded-full shadow-xl">
                 <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            <div className="w-5/12">
                <div className="p-6 bg-dark-secondary border border-white/5 rounded-2xl relative hover:border-primary/50 transition-colors shadow-lg group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10 group-hover:bg-primary/10 transition-colors"></div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">{data.role}</h3>
                    <h4 className="text-primary font-medium mb-3">{data.company}</h4>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{data.period}</span>
                    </div>
                    
                    <ul className="space-y-2 text-gray-400 text-sm leading-relaxed list-disc list-inside">
                        {data.bullets.map((bullet, idx) => (
                            <li key={idx} className="leading-normal">
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });
    
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const experiences = [
        {
            role: "Cyber Security Research Intern",
            company: "CyberLynk",
            period: "Jul 2026 – Sep 2026",
            bullets: [
                "Analyzed Windows endpoint telemetry and Sysmon process-creation logs, inspecting executable paths, command arguments, and process ancestry.",
                "Correlated PowerShell and security events with MITRE ATT&CK techniques (T1059.001) to document detection indicators."
            ]
        },
        {
            role: "Cyber Security Intern",
            company: "Amroha Police Cyber Security Internship Programme (APCSIP-2026)",
            period: "Jun 2026",
            bullets: [
                "Conducted OSINT investigations using IntelligenceX, DeHashed, and FaceCheck to correlate exposed digital footprints.",
                "Evaluated video and media authenticity using InVID and Deepware to identify manipulation indicators."
            ]
        },
        {
            role: "Cyber Security & Digital Forensics Intern",
            company: "Cyber Secured India",
            period: "Apr 2025 – Jul 2025",
            bullets: [
                "Examined Windows forensic artifacts, including registry keys and execution evidence, to investigate unauthorized user activity.",
                "Analyzed Windows Security Event Logs (Events 4624 and 4625) to support authentication analysis and forensic timeline reconstruction."
            ]
        },
        {
            role: "Cybersecurity Virtual Intern",
            company: "ShadowFox",
            period: "Sep 2024",
            bullets: [
                "Completed virtual security modules focused on endpoint baseline security evaluation and vulnerability identification."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 relative overflow-hidden" ref={ref}>
            <div className="max-w-[1200px] mx-auto px-6 relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Verified Experience</span>
                    <h2 className="text-4xl md:text-5xl font-display text-white mt-3">Internship Timeline</h2>
                </motion.div>

                <div className="relative">
                    {/* Scrolling Progress Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/10 origin-top">
                        <motion.div 
                            style={{ scaleY }} 
                            className="w-full h-full bg-gradient-to-b from-primary to-nft-purple origin-top"
                        />
                    </div>

                    <div className="space-y-4">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} data={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
