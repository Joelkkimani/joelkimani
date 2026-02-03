import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full py-8 mt-20 border-t border-white/10 glass-strong text-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
                <div>
                    <span className="text-xl font-bold">Joel k Kimani 2026.</span>
                    <p className="text-sm text-gray-400 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com/joelkimani" className="hover:text-cyan-400 transition-colors"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/joel-kimani-1bba89273" className="hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="hover:text-cyan-400 transition-colors"><Twitter size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
