import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-white">
            <Navbar />
            <WhatsAppButton />
            <main className="flex-grow flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-24 pb-12">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
