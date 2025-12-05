import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "AI & ML",
            color: "neon-green",
            skills: ["State Space Models", "LLMs", "Transformers", "Browser Agents", "Agentic AI", "LangChain", "LlamaIndex"]
        },
        {
            title: "Languages",
            color: "neon-purple",
            skills: ["Python", "Ruby", "C++", "JAX", "PyTorch", "FastAPI"]
        },
        {
            title: "Cloud",
            color: "neon-blue",
            skills: ["AWS", "GCP", "Azure", "Distributed Systems", "Vector DBs"]
        },
        {
            title: "Security",
            color: "neon-yellow",
            skills: ["SOC II", "Security Architecture", "Data Governance"]
        }
    ];

    return (
        <section id="skills" className="py-32 px-8 md:px-24 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <p className="text-neon-yellow font-mono text-sm mb-4">// SKILLS</p>
                <h2 className="text-4xl md:text-5xl font-bold">
                    <span className="gradient-text">Technical expertise</span>
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="p-6 bg-dark-surface border border-border rounded-lg"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Sparkles className={`w-5 h-5 text-${category.color}`} />
                            <h3 className={`text-xl font-bold text-${category.color}`}>
                                {category.title}
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`px-3 py-2 bg-${category.color}/10 text-${category.color} border border-${category.color}/30 rounded text-sm font-mono hover:bg-${category.color}/20 hover:shadow-[0_0_10px_rgba(0,255,136,0.2)] transition-all cursor-default`}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Honors section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 p-8 bg-gradient-to-r from-neon-green/10 via-neon-purple/10 to-neon-blue/10 border border-border rounded-lg"
            >
                <h3 className="text-2xl font-bold mb-6 gradient-text">Honors & Recognition</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-neon-yellow/20 text-neon-yellow rounded-lg flex items-center justify-center font-bold">
                            30U30
                        </div>
                        <div>
                            <p className="text-text-primary font-bold">Forbes 30 Under 30 LA</p>
                            <p className="text-text-secondary text-sm">August 2023</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-neon-purple/20 text-neon-purple rounded-lg flex items-center justify-center">
                            🏆
                        </div>
                        <div>
                            <p className="text-text-primary font-bold">Engineering Entrepreneur of the Year</p>
                            <p className="text-text-secondary text-sm">LMU College of Business, 2020</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
