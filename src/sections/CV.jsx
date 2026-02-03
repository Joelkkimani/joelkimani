import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import cvImg from '../assets/cv.png';

const CV = () => {
    return (
        <section id="cv" className="py-12 sm:py-20 w-full relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-[80px] sm:blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="text-center mb-10 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent italic px-4">
                            Professional Resume
                        </h2>
                        <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6 sm:mb-8"></div>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 sm:px-6">
                            A deep dive into my professional journey, skills, and academic background.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <GlassCard className="max-w-4xl mx-auto p-0 overflow-hidden border-white/10 hover:border-cyan-500/30 transition-all duration-700 group">
                        <div className="flex flex-col md:flex-row">
                            {/* CV Image Preview */}
                            <div className="md:w-1/2 relative overflow-hidden h-56 sm:h-64 md:h-auto">
                                <img
                                    src={cvImg}
                                    alt="CV Preview"
                                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-cyan-400 animate-ping"></div>
                                        <span className="text-cyan-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Digital Experience</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white uppercase italic">Full Resume</h3>
                                </div>
                            </div>

                            {/* CV Content/Actions */}
                            <div className="md:w-1/2 p-6 sm:p-10 md:p-12 flex flex-col justify-center bg-white/[0.02]">
                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                                    My professional CV highlights my expertise in <span className="text-cyan-400 font-semibold">Front-End Development</span>,
                                    problem-solving abilities, and my commitment to high-quality code.
                                </p>

                                <div className="space-y-4">
                                    <a
                                        href="https://drive.google.com/file/d/1GR2KUYzJzibeck9bHQtp6QpxttUkT_LC/view?usp=drive_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between w-full p-4 sm:p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-white hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all group/btn"
                                    >
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                                                <ExternalLink size={20} className="sm:w-6 sm:h-6" />
                                            </div>
                                            <div>
                                                <span className="block font-bold text-sm sm:text-base">View Cv</span>
                                                <span className="text-[10px] sm:text-xs text-gray-400">Opens in google drive</span>
                                            </div>
                                        </div>
                                        <div className="opacity-0 group-hover/btn:opacity-100 transform translate-x-[-10px] group-hover/btn:translate-x-0 transition-all">
                                            →
                                        </div>
                                    </a>

                                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                        <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                            <span className="block text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">100%</span>
                                            <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest font-bold">Dedication</span>
                                        </div>
                                        <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                            <span className="block text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">Modern</span>
                                            <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest font-bold">Stack</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
};

export default CV;
