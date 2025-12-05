import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Brain, Shield } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Hanford",
            subtitle: "Autonomous SSM-Based AI Agent",
            description: "Next-generation autonomous AI agent powered by State Space Models for long-horizon reasoning. Features self-extending capabilities, multi-model pipeline combining Llama-3, Mamba, Qwen3, and Claude.",
            tech: ["Python", "FastAPI", "SSMs", "Mamba", "LlamaIndex"],
            icon: <Brain className="w-8 h-8" />,
            color: "neon-green",
            link: null
        },
        {
            title: "C Squared",
            subtitle: "AI-Powered Newsletter Aggregation",
            description: "AI-powered tool capable of processing ~15 newsletters with minimal information loss. Research insights on long-context limitations directly informed SSM-based approaches.",
            tech: ["NLP", "Transformers", "SSMs", "Data Pipelines"],
            icon: <Cpu className="w-8 h-8" />,
            color: "neon-purple",
            link: "https://www.producthunt.com/products/deepletter/launches/deepletter-2?utm_source=other&utm_medium=social"
        },
        {
            title: "SecureTheVibe",
            subtitle: "AI Security Testing Agent",
            description: "Automated penetration testing agent for rapidly-prototyped projects. Identifies security vulnerabilities in vibe-coded applications.",
            tech: ["Security", "AI Agents", "Penetration Testing"],
            icon: <Shield className="w-8 h-8" />,
            color: "neon-blue",
            link: null
        }
    ];

    return (
        <section id="projects" className="py-32 px-8 md:px-24 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <p className="text-neon-blue font-mono text-sm mb-4">// PROJECTS</p>
                <h2 className="text-4xl md:text-5xl font-bold">
                    <span className="gradient-text">Things I've built</span>
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`group relative p-6 bg-dark-surface border border-border rounded-lg hover:border-${project.color}/50 transition-all duration-500 flex flex-col h-full overflow-hidden`}
                    >
                        {/* Animated gradient background on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                        <div className="relative flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 bg-${project.color}/10 text-${project.color} rounded-lg group-hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-shadow`}>
                                    {project.icon}
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded border border-border text-text-secondary hover:border-${project.color} hover:text-${project.color} hover:shadow-[0_0_10px_rgba(0,255,136,0.3)] transition-all duration-300`}
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                )}
                            </div>

                            <p className={`text-${project.color} font-mono text-xs mb-2`}>{project.subtitle}</p>
                            <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-neon-green transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 text-text-secondary text-xs font-mono"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
