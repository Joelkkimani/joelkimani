import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const TypewriterText = ({ text, onComplete }) => {
    const characters = [...text];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2,
                onComplete: () => {
                    if (onComplete) {
                        onComplete();
                    }
                }
            }
        }
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: 10,
            filter: "blur(8px)",
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            }
        }
    };

    return (
        <motion.span
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex flex-wrap justify-center overflow-hidden"
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={childVariants}
                    className={clsx(
                        "inline-block",
                        char === " " ? "mr-2" : "mr-[0.05em]"
                    )}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
};

const Preloader = ({ onStart }) => {
    const [step, setStep] = useState(0)

    return (

        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-md"
        >
            <div className="text-center px-4 md:p-8 max-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex flex-col items-center gap-4 min-h-[140px] md:min-h-[160px]"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        <TypewriterText
                            text="Hi, I'm Joe 👋"
                            onComplete={() => setTimeout(() => setStep(1), 1500)}
                        />
                    </h1>

                    {step >= 1 && (
                        <h2 className="text-xl md:text-3xl text-cyan-400 font-medium leading-tight">
                            <TypewriterText
                                text="I'm a Front End Developer"
                                onComplete={() => setTimeout(() => setStep(2), 1500)}
                            />
                        </h2>
                    )}

                    {step >= 2 && (
                        <p className="text-lg md:text-2xl text-gray-300 font-light mt-2 leading-relaxed">
                            <TypewriterText
                                text="Welcome to my portfolio."
                                onComplete={() => setTimeout(() => setStep(3), 1000)}
                            />
                        </p>
                    )}
                </motion.div>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onStart}
                    className="group mt-8 md:mt-12 px-8 py-3 bg-transparent border border-white/30 text-white rounded-full font-medium transition-all flex items-center gap-2 mx-auto backdrop-blur-sm"
                >
                    Next <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Preloader;
