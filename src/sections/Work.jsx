import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import Skeleton from '../components/Skeleton';
import { ExternalLink, Github } from 'lucide-react';

// Import project images
import portfolioImg from '../assets/portfolio.png';
import cvImg from '../assets/cv.png';
import projectImg from '../assets/frantikie.png';
import joecafeImg from '../assets/joecafe.jpg';
import beatsImg from '../assets/beats.jpg';


const projects = [
    {
        title: "First portfolio",
        description: "My first ever portfolio, moments and projects like these that you look at and see where you started.",
        img: portfolioImg,
        tags: ["HTML", "CSS", "Javascript"],
        link: "https://joeportfolio-delta.vercel.app/",
        github: "https://github.com/Joelkkimani/Portfolio"
    },
    {
        title: "Simple modern website",
        description: "A demonstration of modern web technologies featuring responsive design and interactive elements.",
        img: projectImg,
        tags: ["HTML", "CSS", "Javascript"],
        link: "https://joelkkimani.github.io/Frantikie/",
        github: "https://github.com/Joelkkimani/Frantikie"
    },
    {
        title: "Joe Cafe",
        description: "A modern cafe website featuring a delightful menu and a focus on healthy delicacies.",
        img: joecafeImg,
        tags: ["Html", "Css", "Javascript"],
        link: "",
        github: "https://github.com/Joelkkimani"
    },
    {
        title: "Beats by Dre",
        description: "A premium landing page for Beats by Dre headphones, featuring high-quality visuals and interactive elements.",
        img: beatsImg,
        tags: ["Html", "Css", "Javascript"],
        link: "",
        github: "https://github.com/Joelkkimani"
    }
];

const Work = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="work" className="py-20 w-full">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent italic px-4">
                            Featured Projects
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-8"></div>
                        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-6">
                            A curated selection of projects demonstrating my commitment to clean code and impactful user experiences.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6">
                    {loading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <GlassCard key={index} className="h-[320px] sm:h-[360px] flex flex-col">
                                <Skeleton className="h-32 sm:h-40 w-full rounded-t-xl mb-4" />
                                <div className="p-3 sm:p-4 space-y-3">
                                    <Skeleton className="h-5 w-3/4" />
                                    <Skeleton className="h-3 w-full" />
                                    <Skeleton className="h-3 w-5/6" />
                                    <div className="flex gap-2 pt-1">
                                        <Skeleton className="h-5 w-12" />
                                        <Skeleton className="h-5 w-12" />
                                    </div>
                                </div>
                            </GlassCard>
                        ))
                    ) : (
                        projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <GlassCard className="h-full group flex flex-col overflow-hidden hover:border-cyan-500/50 transition-all duration-500 rounded-2xl">
                                    {/* Image Container */}
                                    <div className="relative h-32 sm:h-40 overflow-hidden">
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                                            <span className="text-white text-[10px] font-semibold tracking-wider uppercase">View </span>
                                        </div>
                                    </div>

                                    <div className="p-4 sm:p-5 flex-grow flex flex-col">
                                        <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2 group-hover:text-cyan-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4 sm:gap-1.5 mt-auto">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all transform hover:scale-110 border border-white/10 flex items-center justify-center"
                                                    title="View Source"
                                                >
                                                    <Github size={16} />
                                                </a>
                                            )}
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-all transform hover:scale-110 border border-cyan-500/20 ml-auto flex items-center justify-center"
                                                    title="Live Demo"
                                                >
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Work;
