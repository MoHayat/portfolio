import React from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-8 md:px-24 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl mx-auto"
            >
                <p className="text-neon-pink font-mono text-sm mb-4">// CONTACT</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    <span className="gradient-text">Let's build something</span>
                </h2>

                <a
                    href="mailto:mohammedjhayat@gmail.com"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-neon-green text-dark-bg font-bold rounded hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300"
                >
                    <Send className="w-5 h-5" />
                    Get in touch
                </a>

                {/* Social links */}
                <div className="flex justify-center gap-6 mt-12">
                    <a
                        href="https://github.com/Mohayat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 border border-border rounded-lg text-text-secondary hover:border-neon-green hover:text-neon-green hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://linkedin.com/in/mjhayat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 border border-border rounded-lg text-text-secondary hover:border-neon-blue hover:text-neon-blue hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="mailto:mohammedjhayat@gmail.com"
                        className="p-4 border border-border rounded-lg text-text-secondary hover:border-neon-purple hover:text-neon-purple hover:shadow-[0_0_15px_rgba(179,136,255,0.3)] transition-all duration-300"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
            </motion.div>

            {/* Footer */}
            <footer className="mt-32 pt-8 border-t border-border">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="font-mono text-sm">
                        <span className="text-neon-green">&lt;</span>
                        <span className="text-text-secondary">Built by Mohammed Hayat</span>
                        <span className="text-neon-green">/&gt;</span>
                    </div>
                    <p className="text-text-secondary text-sm font-mono">
                        © 2025 — All rights reserved
                    </p>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
