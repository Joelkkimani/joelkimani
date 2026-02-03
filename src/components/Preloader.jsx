import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TypewriterText = ({ text, delay = 0, onComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(false);

    useEffect(() => {
        let timeout;
        let currentIndex = 0;

        const startTyping = () => {
            setShowCursor(true);
            const typeChar = () => {
                if (currentIndex < text.length) {
                    setDisplayText(prev => text.slice(0, currentIndex + 1));
                    currentIndex++;
                    timeout = setTimeout(typeChar, 100); // Slower typing speed
                } else {
                    if (onComplete) onComplete();
                    // Keep cursor blinking for a bit then maybe hide? keeping it is fine.
                }
            };
            typeChar();
        };

        const initialDelay = setTimeout(startTyping, delay);

        return () => {
            clearTimeout(timeout);
            clearTimeout(initialDelay);
        };
    }, [text, delay, onComplete]);

    return (
        <span className="inline-block">
            {displayText}
            {showCursor && (
                <span className="animate-cursor border-r-2 border-cyan-400 ml-1">&nbsp;</span>
            )}
        </span>
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
            <div className="text-center p-8 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex flex-col items-center gap-4 min-h-[160px]"
                >
                    {/* Using a key to remount/restart is also an option, but state sequence is cleaner */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        <TypewriterText
                            text="Hi, I'm Joe 👋,"
                            onComplete={() => setTimeout(() => setStep(1), 0)}
                        />
                    </h1>

                    {step >= 1 && (
                        <h2 className="text-2xl md:text-3xl text-cyan-400 font-medium">
                            <TypewriterText
                                text="I'm a Front End Developer,"
                                delay={2}
                                onComplete={() => setTimeout(() =>

                                    setStep(2)

                                    , 500)}
                            />
                        </h2>
                    )}

                    {step >= 2 && (
                        <p className="text-xl md:text-2xl text-gray-300 font-light mt-2">
                            <TypewriterText
                                text="Welcome to my portfolio."
                                delay={0}
                                onComplete={() => setTimeout(() => setStep(3), 0)}
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
                    className="group mt-12 px-8 py-3 bg-transparent border border-white/30 text-white rounded-full font-medium transition-all flex items-center gap-2 mx-auto backdrop-blur-sm"
                >
                    Next <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Preloader;
