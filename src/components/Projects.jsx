import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const DEFAULT_IMAGE = '/images/default_project.png';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;

    const categories = ['All', 'SOC & Detection', 'DFIR & Triage', 'DevSecOps'];

    const projects = [
        {
            _id: '1',
            title: 'SHERLOCK — AI-Assisted SOC Platform',
            description: 'Security operations platform combining deterministic Sysmon detection with structured triage, forensic review, and threat intelligence workflows in a React dashboard.',
            technologies: ['Python', 'FastAPI', 'React', 'SQLite', 'Sysmon'],
            githubUrl: 'https://github.com/lokilokith/Sherlock-SOC',
            projectUrl: '',
            image: '/images/sherlock/release-overview.png',
            category: 'SOC & Detection',
            statusBadge: ''
        },
        {
            _id: '2',
            title: 'SENTRA+ — Behavioral Threat Detection',
            description: 'Endpoint threat hunting framework that normalizes Sysmon XML telemetry into correlated attack sequences, featuring baseline-aware burst detection and MITRE ATT&CK mapping.',
            technologies: ['Python', 'Flask', 'Sysmon XML', 'YAML', 'MITRE ATT&CK'],
            githubUrl: 'https://github.com/lokilokith/sentineltrace-platform',
            projectUrl: '',
            image: '/images/sentineltrace/dashboard-overview.png',
            category: 'SOC & Detection',
            statusBadge: ''
        },
        {
            _id: '3',
            title: 'Windows IOC Scanner',
            description: 'Host-level triage utility that inspects active processes, failed logons, persistence locations, and PowerShell abuse to generate unified HTML and JSON investigation reports.',
            technologies: ['Python', 'Flask', 'PowerShell', 'Windows API'],
            githubUrl: 'https://github.com/lokilokith/windows-ioc-scanner',
            projectUrl: '',
            image: '/images/windows-ioc-scanner/dashboard-clean-state.png',
            category: 'DFIR & Triage',
            statusBadge: ''
        },
        {
            _id: '4',
            title: 'OpsForge — Threat Intelligence Governance',
            description: 'DevSecOps platform providing role-based access control, threat intelligence resource governance, and automated CI/CD pipeline security testing with Bandit and Mutmut.',
            technologies: ['Python', 'Flask', 'SQLAlchemy', 'Docker', 'CI/CD'],
            githubUrl: 'https://github.com/lokilokith/Devops',
            projectUrl: '',
            image: '/images/default_project.png',
            category: 'DevSecOps',
            statusBadge: 'Work in Progress'
        }
    ];

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setCurrentPage(1);
    };

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category.toLowerCase() === activeCategory.toLowerCase());

    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    const paginatedProjects = filteredProjects.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <span className="text-neon-green font-medium tracking-wide text-sm uppercase">Selected Works</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Security Projects</h2>
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap gap-2 p-1.5 bg-dark-secondary/80 border border-white/10 rounded-xl backdrop-blur-md">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                                    ? 'text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activeProjectTab"
                                        className="absolute inset-0 bg-primary rounded-lg -z-10 shadow-lg shadow-primary/30"
                                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                    />
                                )}
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Animated Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {paginatedProjects.map((project, index) => {
                            const projectImgSrc = project.image && project.image.trim() !== ''
                                ? project.image
                                : DEFAULT_IMAGE;

                            return (
                                <motion.div
                                    layout
                                    key={project._id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="group relative rounded-2xl overflow-hidden bg-dark-secondary border border-white/5 flex flex-col"
                                >
                                    <div className="h-64 overflow-hidden relative bg-black/40 flex items-center justify-center">
                                        <img
                                            src={projectImgSrc}
                                            alt={project.title}
                                            onError={(e) => {
                                                e.currentTarget.src = DEFAULT_IMAGE;
                                            }}
                                            className={`w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out ${projectImgSrc === DEFAULT_IMAGE ? 'object-contain p-8 opacity-80' : 'object-cover'
                                                }`}
                                        />
                                        <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center gap-4">
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md border border-white/10" title="View Source Code on GitHub">
                                                    <Github className="w-6 h-6" />
                                                </a>
                                            )}
                                            {project.projectUrl && (
                                                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md border border-white/10" title="Live Preview">
                                                    <ExternalLink className="w-6 h-6" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-6 relative flex-1 flex flex-col justify-between">
                                        <div className="absolute -top-6 right-6 bg-primary w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-primary/40 transform group-hover:-translate-y-2 transition-transform duration-300">
                                            <ArrowUpRight className="text-white w-6 h-6" />
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/20 text-neon-purple border border-primary/30">
                                                    {project.category}
                                                </span>
                                                {project.statusBadge && (
                                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                                                        {project.statusBadge}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">{project.title}</h3>
                                            <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                                            {(project.technologies || []).slice(0, 3).map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/5">
                                                    {tech}
                                                </span>
                                            ))}
                                            {(project.technologies || []).length > 3 && (
                                                <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/5">
                                                    +{(project.technologies || []).length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-3 mt-16">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`p-3 rounded-xl border flex items-center justify-center transition-all duration-300 ${currentPage === 1
                                ? 'border-white/5 text-gray-600 cursor-not-allowed'
                                : 'border-white/10 text-white bg-dark-secondary hover:bg-white/10 hover:border-primary/50'
                                }`}
                            aria-label="Previous Page"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex gap-2 p-1.5 bg-dark-secondary/80 border border-white/10 rounded-xl backdrop-blur-md">
                            {Array.from({ length: totalPages }, (_, index) => {
                                const pageNumber = index + 1;
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => setCurrentPage(pageNumber)}
                                        className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-300 ${currentPage === pageNumber
                                            ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`p-3 rounded-xl border flex items-center justify-center transition-all duration-300 ${currentPage === totalPages
                                ? 'border-white/5 text-gray-600 cursor-not-allowed'
                                : 'border-white/10 text-white bg-dark-secondary hover:bg-white/10 hover:border-primary/50'
                                }`}
                            aria-label="Next Page"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
