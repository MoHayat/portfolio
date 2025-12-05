import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 max-w-6xl mx-auto relative pixel-grid">
            {/* Floating pixel decorations */}
            <div className="absolute top-20 right-20 w-4 h-4 bg-neon-green animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-40 right-40 w-3 h-3 bg-neon-purple animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-40 left-20 w-4 h-4 bg-neon-blue animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-60 left-40 w-2 h-2 bg-neon-yellow animate-float" style={{ animationDelay: '1.5s' }}></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
            >
                {/* Terminal-style intro */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 text-neon-green font-mono text-sm"
                >
                    <Terminal className="w-4 h-4" />
                    <span className="cursor-blink">~/senior-ai-engineer</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                    <span className="gradient-text">Mohammed</span>
                    <br />
                    <span className="text-text-primary">Hayat</span>
                </h1>

                <div className="flex flex-wrap gap-3 text-sm font-mono">
                    <span className="px-3 py-1 bg-neon-green/10 text-neon-green border border-neon-green/30 rounded">AI Engineer</span>
                    <span className="px-3 py-1 bg-neon-purple/10 text-neon-purple border border-neon-purple/30 rounded">ML Researcher</span>
                    <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue border border-neon-blue/30 rounded">Technical Leader</span>
                </div>

                <p className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed">
                    Building <span className="text-neon-green">autonomous AI systems</span>,
                    <span className="text-neon-purple"> agentic architectures</span>, and
                    <span className="text-neon-blue"> production ML infrastructure</span>.
                    Former CTO with expertise in State Space Models.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 pt-8">
                    <a
                        href="#projects"
                        className="group inline-flex items-center gap-3 px-6 py-3 bg-neon-green text-dark-bg font-bold rounded hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition-all duration-300"
                    >
                        View my work
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex items-center gap-6 text-text-secondary">
                        <a
                            href="https://github.com/Mohayat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-neon-green transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/mjhayat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-neon-blue transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:mohammedjhayat@gmail.com"
                            className="hover:text-neon-purple transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(179,136,255,0.8)]"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
