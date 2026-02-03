import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Mail, User } from 'lucide-react';
import clsx from 'clsx';

const MobileDock = () => {
    const dockItems = [
        { icon: Home, label: "Home", href: "#hero" },
        { icon: User, label: "About", href: "#about" },
        { icon: Briefcase, label: "Work", href: "#work" },
        { icon: Mail, label: "Contact", href: "#contact" },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden p-4 pb-6">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center justify-around p-2 glass-strong rounded-[1.2rem] border border-white/20 shadow-2xl max-w-md mx-auto"
            >
                {dockItems.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex-1 flex flex-col items-center justify-center p-3 text-white/70 hover:text-white transition-colors relative group"
                    >
                        <div className="p-2 rounded-2xl bg-white/5 group-hover:bg-white/10 border border-white/5 transition-colors">
                            <item.icon size={22} />
                        </div>
                        <span className="text-[10px] mt-1 font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                            {item.label}
                        </span>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};

export default MobileDock;
