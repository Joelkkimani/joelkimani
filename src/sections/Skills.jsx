import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { Code, Layout, Blocks, Terminal, GitBranch, Palette } from 'lucide-react';

const skills = [
    { name: "HTML", proficiency: 95, icon: Code, color: "text-orange-400" },
    { name: "CSS", proficiency: 90, icon: Layout, color: "text-blue-400" },
    { name: "JavaScript", proficiency: 80, icon: Terminal, color: "text-yellow-400" },
    { name: "React", proficiency: 75, icon: Blocks, color: "text-cyan-400" },
    { name: "Tailwind", proficiency: 65, icon: Palette, color: "text-teal-400" },
    { name: "Git", proficiency: 60, icon: GitBranch, color: "text-red-400" },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 w-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto"
            >
                <div className="text-center mb-10 md:mb-16 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4 text-base md:text-lg px-4 italic">Technologies I use to bring ideas to life.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {skills.map((skill, index) => (
                        <GlassCard key={index} className="flex flex-col gap-4 !bg-white/[0.03]">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 bg-white/5 rounded-lg ${skill.color}`}>
                                        <skill.icon size={22} />
                                    </div>
                                    <span className="font-bold text-lg">{skill.name}</span>
                                </div>
                                <span className="text-cyan-400 font-medium">{skill.proficiency}%</span>
                            </div>

                            {/* Progress Bar Container */}
                            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.proficiency}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400"
                                />
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
