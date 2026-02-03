import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { Send, Mail, MapPin } from 'lucide-react';
const submitEmail = (e) => {
    e.preventDefault();
    alert("Successfully sent!");
};
const Contact = () => {
    return (

        <section id="contact" className="py-20 w-full mb-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Get In Touch with me</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <GlassCard className="flex items-center gap-4">
                            <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold">Email Me</h4>
                                <p className="text-sm text-gray-400">joelkimani295@gmail.com</p>
                            </div>
                        </GlassCard>
                        <GlassCard className="flex items-center gap-4">
                            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-300">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold">Location</h4>
                                <p className="text-sm text-gray-400">Nairobi,Kenya</p>
                            </div>
                        </GlassCard>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-4">Let's Build Something Amazing</h3>
                            <p className="text-gray-300 leading-relaxed">
                                I'm currently available for freelance projects and open to full-time opportunities.
                                If you have a project in mind, let's chat and make your idea into reality , and you can also contact me on my email.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <GlassCard>
                        <></>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder-gray-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder-gray-500"
                                    placeholder="joe doe@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder-gray-500"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex justify-center items-center gap-2"
                                onClick={submitEmail}
                            >
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </GlassCard>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
