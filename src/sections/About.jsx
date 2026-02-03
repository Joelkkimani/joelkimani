import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { User, Code, Globe, Coffee } from 'lucide-react';
import profileImg from '../assets/joel.png'; // Placeholder image


const About = () => {
    return (
        <section id="about" className="py-20 w-full">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-10 md:mb-16 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Bio Card */}
                    <GlassCard className="h-full flex flex-col justify-center">
                        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl rotate-6 opacity-20"></div>
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="relative w-full h-full object-cover rounded-2xl border border-white/10 shadow-xl"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-300">
                                        <User size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold">Who am I</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    I'm a passionate Front-end developer with an aim of building user friendly web experience for users.
                                </p>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Stats/Info Grid */}
                    <div className="grid grid-cols-1 gap-6">
                        <GlassCard className="flex items-center gap-4">
                            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-300">
                                <Code size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold">Clean Code</h4>
                                <p className="text-sm text-gray-400">Maintainable & Readable</p>
                            </div>
                        </GlassCard>

                        <GlassCard className="flex items-center gap-4">
                            <div className="p-3 bg-pink-500/20 rounded-lg text-pink-300">
                                <Globe size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold">Modern Tech</h4>
                                <p className="text-sm text-gray-400">React and Tailwind</p>
                            </div>
                        </GlassCard>

                        <GlassCard className="flex items-center gap-4">
                            <div className="p-3 bg-yellow-500/20 rounded-lg text-yellow-300">
                                <Coffee size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold">Always Learning</h4>
                                <p className="text-sm text-gray-400">Exploring new things </p>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
