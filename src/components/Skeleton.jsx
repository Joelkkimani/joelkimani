import React from 'react';
import clsx from 'clsx';

const Skeleton = ({ className }) => {
    return (
        <div
            className={clsx(
                "animate-pulse bg-white/5 rounded-lg",
                "relative overflow-hidden",
                "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
                className
            )}
        />
    );
};

export default Skeleton;
