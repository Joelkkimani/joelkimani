import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, BookOpen, Shield } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const FreeCodeCampIcon = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M18.498 12.012l-1.332-1.332 1.332-1.332-1.332-1.331 1.332-1.332 1.332 1.332h2.664v2.664l-1.332 1.332 1.332 1.332-1.332 1.332 1.332 1.332-1.332 1.331 1.332 1.332-1.332 1.332h-2.664v-2.664zM11.988 18.006l-1.332-1.332 1.332-1.332-1.332-1.331 1.332-1.332 1.332 1.332h2.664v2.664l-1.332 1.332 1.332 1.332-1.332 1.332 1.332 1.332-1.332 1.331 1.332 1.332-1.332 1.332h-2.664v-2.664zM5.49 12.012l-1.332-1.332 1.332-1.332-1.332-1.331 1.332-1.332 1.332 1.332h2.664v2.664l-1.332 1.332 1.332 1.332-1.332 1.332 1.332 1.332-1.332 1.331 1.332 1.332-1.332 1.332H2.826v-2.664z" />
    </svg>
);

const Education = () => {
    const milestones = [
        {
            year: "2024",
            title: "High School Graduation",
            description: "Completed my secondary education, laying a strong foundation on becoming a frontend developer.",
            icon: <GraduationCap className="text-cyan-400" size={24} />,
            color: "from-cyan-500/20 to-blue-500/20"
        },
        {
            year: "2024 -Done ✅",
            title: "freeCodeCamp",
            description: "Intensive self-paced learning focused on Front-End Web Development. Here I got the chance to learn various modern web technologies.",
            icon: <FreeCodeCampIcon className="text-green-400" size={24} />,
            color: "from-green-500/20 to-emerald-500/20",
            skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Git", "GitHub"]
        },
        {
            year: "2025 - Present Alx Africa",
            title: "Cybersecurity",
            description: "Currently focused on learning the fundamentals of Cybersecurity and Ethical Hacking to build secure digital environments.",
            icon: <Shield className="text-red-400" size={24} />,
            color: "from-red-500/20 to-orange-500/20",
            skills: ["Network Security", "Ethical Hacking", "Linux"]
        }
    ];

    return (
        <section id="education" className="py-12 sm:py-20 w-full relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="text-center mb-10 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent italic px-4">
                            My Education
                        </h2>
                        <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6 sm:mb-8"></div>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 sm:px-6">
                            My journey from formal education to becoming a self-taught developer.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <GlassCard className={`h-full p-6 sm:p-8 border-white/5 hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden bg-gradient-to-br ${milestone.color}`}>
                                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 text-white shrink-0">
                                        {milestone.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-center mb-1 sm:mb-2">
                                            <span className="text-cyan-400 font-bold text-[10px] sm:text-sm tracking-widest uppercase">{milestone.year}</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                                            {milestone.description}
                                        </p>

                                        {milestone.skills && (
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {milestone.skills.map(skill => (
                                                    <span key={skill} className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2.5 sm:px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
