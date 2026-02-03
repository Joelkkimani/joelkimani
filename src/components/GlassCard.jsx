import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className, hoverEffect = true }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { scale: 1.02, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" } : {}}
            className={clsx(
                "glass rounded-xl p-6 border border-white/20",
                "transition-all duration-300 ease-in-out",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
