import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Work", href: "#work" },
        { name: "CV", href: "#cv" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 hidden md:block",
                scrolled ? "glass-strong py-2" : "py-6 bg-transparent"
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

                {/* Desktop Menu Only */}
                <div className="flex space-x-8">
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
            </div>
        </nav>
    );
};

export default Navbar;
