import React from 'react';

const LiquidBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-slate-900 overflow-hidden">
            {/* Dynamic Blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>

            {/* Noise Overlay for texture (optional) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E")' }}></div>

            {/* Gradient Overlay to darken slightly */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50"></div>
        </div>
    );
};

export default LiquidBackground;
