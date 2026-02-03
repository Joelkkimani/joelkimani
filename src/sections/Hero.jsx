import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal, Layout as LayoutIcon } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Hero = () => {
    return (
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center items-center text-center w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <div className="flex flex-col items-center gap-3 mb-8">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-white font-medium italic"
                    >
                
                    </motion.p>
                    <div className="inline-block px-4 py-1.5 text-sm font-medium tracking-wider text-cyan-300 uppercase glass rounded-full ring-1 ring-cyan-500/20">
                        Front-End Developer
                    </div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-200 px-4">
                    I Build Modern <span className="text-cyan-400">Experiences</span> that Matter.
                </h1>

                <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed px-6">
                    I craft high-performance web applications with stunning designs and seamless user interactions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.a
                        href="#work"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-transparent-500 hover:bg-cyan-600 text-white font-semibold rounded-xl flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
                    >
                        View My Work <ArrowRight size={20} />
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                    >
                        Contact Me
                    </motion.a>
                </div>
            </motion.div>

            {/* Floating Skills Cards */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12 md:mt-20 px-4">
                <GlassCard className="flex items-center gap-2 md:gap-3 !p-3 md:!p-4 !rounded-lg animate-blob animation-delay-2000">
                    <div className="p-1.5 md:p-2 bg-blue-500/20 rounded-lg text-blue-300"><Code size={18} className="md:w-5 md:h-5" /></div>
                    <span className="font-medium text-xs md:text-sm">React.js</span>
                </GlassCard>

                <GlassCard className="flex items-center gap-2 md:gap-3 !p-3 md:!p-4 !rounded-lg animate-blob">
                    <div className="p-1.5 md:p-2 bg-purple-500/20 rounded-lg text-purple-300"><LayoutIcon size={18} className="md:w-5 md:h-5" /></div>
                    <span className="font-medium text-xs md:text-sm">Tailwind CSS</span>
                </GlassCard>

                <GlassCard className="flex items-center gap-2 md:gap-3 !p-3 md:!p-4 !rounded-lg animate-blob animation-delay-4000">
                    <div className="p-1.5 md:p-2 bg-green-500/20 rounded-lg text-green-300"><Terminal size={18} className="md:w-5 md:h-5" /></div>
                    <span className="font-medium text-xs md:text-sm">Javascript</span>
                </GlassCard>
            </div>
        </section >
    );
};

export default Hero;
