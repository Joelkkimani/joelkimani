import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "254743290687";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-32 right-6 z-[60] md:bottom-8 md:right-8"
        >
            <div className="relative group">
                {/* Ping Effect */}
                <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping"></span>

                {/* Main Button */}
                <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg shadow-green-500/20 text-white transition-all overflow-hidden border border-white/20 backdrop-blur-md">
                    <MessageCircle size={28} />
                </div>

                {/* Tooltip */}
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                    Chat with me
                </span>
            </div>
        </motion.a>
    );
};

export default WhatsAppButton;
