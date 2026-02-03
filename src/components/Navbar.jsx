import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, FileText, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

import logo from '../assets/joel.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about", icon: User },
        { name: "Education", href: "#education", icon: Home },
        { name: "Work", href: "#work", icon: Briefcase },
        { name: "CV", href: "#cv", icon: FileText },
        { name: "Contact", href: "#contact", icon: Mail },
    ];

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                scrolled || isOpen ? "glass-strong py-2" : "py-6 bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
                <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tight group">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-8 h-8 rounded-full border border-cyan-500/30 group-hover:scale-110 transition-transform"
                    />
                    <span>
                        JoelKimani<span className="text-cyan-400">.</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-cyan-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-4 text-lg font-medium hover:text-cyan-400 transition-colors p-2"
                                >
                                    <link.icon className="text-cyan-400" size={20} />
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
