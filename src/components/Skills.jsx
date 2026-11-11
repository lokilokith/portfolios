import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Crosshair, Search, Terminal, ShieldCheck, Award, ExternalLink } from 'lucide-react';

const Skills = () => {
    const skills = [
        {
            category: "Security Operations & SIEM",
            icon: <ShieldAlert className="w-8 h-8 text-neon-purple" />,
            items: [
                "Wazuh SIEM",
                "Splunk Enterprise",
                "Sysmon Telemetry",
                "Windows Event Logs (4624/4625)",
                "Alert Triage & Incident Analysis"
            ]
        },
        {
            category: "Detection & Threat Hunting",
            icon: <Crosshair className="w-8 h-8 text-neon-green" />,
            items: [
                "MITRE ATT&CK Mapping",
                "YAML Detection Rules",
                "Behavioral Burst Analysis",
                "LOLBIN Execution Tracking",
                "Threat Hunting Workflows"
            ]
        },
        {
            category: "DFIR & Threat Analysis",
            icon: <Search className="w-8 h-8 text-blue-500" />,
            items: [
                "Digital Forensics",
                "Timeline Reconstruction",
                "OSINT (IntelligenceX, DeHashed)",
                "Media Authenticity (InVID)",
                "YARA Rules & VirusTotal API"
            ]
        },
        {
            category: "Network & Security Tooling",
            icon: <Terminal className="w-8 h-8 text-accent" />,
            items: [
                "Wireshark Traffic Analysis",
                "TCP/IP & DNS Protocols",
                "Nmap Scanning",
                "Python & PowerShell",
                "Docker & Git Version Control"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-neon-purple font-medium tracking-wide text-sm uppercase">Technical Capabilities</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Security Skills</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Tools, telemetry sources, and investigation workflows verified through practical lab engineering and security internships.
                    </p>
                </div>

                {/* 4 Skill Categories */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="group flex flex-col items-center text-center"
                        >
                            <div className="mb-4 inline-flex p-4 bg-white/5 rounded-2xl group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                {React.cloneElement(skill.icon, { className: "w-8 h-8" })}
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{skill.category}</h3>
                            
                            <div className="w-12 h-1 bg-white/10 rounded-full mb-6 group-hover:bg-primary/50 transition-colors"></div>

                            <ul className="space-y-3">
                                {skill.items.map((item, idx) => (
                                    <li key={idx} className="text-gray-400 group-hover:text-gray-200 transition-colors font-medium text-sm">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Certifications Subsection */}
                <div className="mt-24 pt-16 border-t border-white/5">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Verified Credentials</span>
                        <h3 className="text-3xl md:text-4xl font-display text-white mt-2">Certifications & Accreditations</h3>
                        <p className="text-gray-400 max-w-xl mx-auto mt-2 text-sm">
                            Formal professional certifications and verified technical training credentials.
                        </p>
                    </div>

                    {/* Primary Featured Certifications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
                        {/* SC-200 */}
                        <div className="p-6 bg-dark-secondary border border-primary/40 rounded-2xl relative shadow-lg shadow-primary/10 group hover:border-primary transition-all">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20 shrink-0">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div className="min-w-0">
                                    <span className="text-[11px] uppercase tracking-wider font-semibold text-primary">Professional Certification</span>
                                    <h4 className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                                        Microsoft Certified: Security Operations Analyst Associate (SC-200)
                                    </h4>
                                    <p className="text-xs text-gray-400 mt-1">Issuer: Microsoft</p>
                                </div>
                            </div>
                            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400 font-mono">
                                <span>Issued: Jul 2026</span>
                                <span className="text-gray-500">Expires: Jul 2027</span>
                            </div>
                        </div>

                        {/* CBTP */}
                        <div className="p-6 bg-dark-secondary border border-nft-purple/40 rounded-2xl relative shadow-lg shadow-nft-purple/10 group hover:border-nft-purple transition-all">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-nft-purple/10 rounded-xl text-nft-purple border border-nft-purple/20 shrink-0">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div className="min-w-0">
                                    <span className="text-[11px] uppercase tracking-wider font-semibold text-nft-purple">Professional Certification</span>
                                    <h4 className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                                        Certified Blue Team Practitioner (CBTP)
                                    </h4>
                                    <p className="text-xs text-gray-400 mt-1">Issuer: SecOps Group</p>
                                </div>
                            </div>
                            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400 font-mono">
                                <span>Issued: Mar 2026</span>
                                <span className="text-green-400 font-medium">Active</span>
                            </div>
                        </div>
                    </div>

                    {/* Additional Technical Credentials (Compact Grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {/* Cisco */}
                        <div className="p-4 bg-dark-secondary/60 border border-white/5 rounded-xl hover:border-white/15 transition-all">
                            <div className="flex items-center gap-2 mb-2 text-gray-400">
                                <Award className="w-4 h-4 text-neon-green" />
                                <span className="text-[10px] uppercase font-mono tracking-wider">Career Path</span>
                            </div>
                            <h5 className="text-sm font-semibold text-white leading-tight">Cisco Junior Cybersecurity Analyst</h5>
                            <p className="text-xs text-gray-400 mt-1">Cisco</p>
                        </div>

                        {/* CLLMSE */}
                        <div className="p-4 bg-dark-secondary/60 border border-white/5 rounded-xl hover:border-white/15 transition-all">
                            <div className="flex items-center justify-between gap-2 mb-2 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <Award className="w-4 h-4 text-primary" />
                                    <span className="text-[10px] uppercase font-mono tracking-wider">Credential</span>
                                </div>
                                <a 
                                    href="https://courses.redteamleaders.com/exam-completion/5d6f161255a8ebf5" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-400 hover:text-primary transition-colors"
                                    title="Verify Credential (5d6f161255a8ebf5)"
                                >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                            <h5 className="text-sm font-semibold text-white leading-tight">Certified LLM Security Expert (CLLMSE)</h5>
                            <p className="text-xs text-gray-400 mt-1">Red Team Leaders • Sep 2026</p>
                        </div>

                        {/* OPSWAT OCFA */}
                        <div className="p-4 bg-dark-secondary/60 border border-white/5 rounded-xl hover:border-white/15 transition-all">
                            <div className="flex items-center gap-2 mb-2 text-gray-400">
                                <Award className="w-4 h-4 text-blue-400" />
                                <span className="text-[10px] uppercase font-mono tracking-wider">Credential</span>
                            </div>
                            <h5 className="text-sm font-semibold text-white leading-tight">Cybersecurity Fundamentals (OCFA)</h5>
                            <p className="text-xs text-gray-400 mt-1">OPSWAT</p>
                        </div>

                        {/* Microsoft Learn Student SOC */}
                        <div className="p-4 bg-dark-secondary/60 border border-white/5 rounded-xl hover:border-white/15 transition-all">
                            <div className="flex items-center gap-2 mb-2 text-gray-400">
                                <Award className="w-4 h-4 text-yellow-400" />
                                <span className="text-[10px] uppercase font-mono tracking-wider">Foundations</span>
                            </div>
                            <h5 className="text-sm font-semibold text-white leading-tight">Student SOC Program Foundations</h5>
                            <p className="text-xs text-gray-400 mt-1">Microsoft Learn</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
