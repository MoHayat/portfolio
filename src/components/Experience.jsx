import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, Award } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "Abstract",
            role: "Co-Founder & CTO/CAIRO",
            period: "2019 — 2025",
            icon: <Rocket className="w-5 h-5" />,
            color: "neon-green",
            description: "Led all technical development and AI research for VC-backed AI-tech startup building the first AI Regulatory Task Force. Architected products from 0 to 1, led SOC II audits, and established an applied AI research wing achieving 100% product acceptance rate.",
            achievements: [
                "Raised $10M in total funding",
                "100% product acceptance rate",
                "SOC II Type 1 & 2 certified"
            ],
            tech: ["PyTorch", "Python", "AWS", "Distributed Systems", "LLMs"]
        },
        {
            company: "Fakespot (acq. by Mozilla)",
            role: "AI/ML Engineer",
            period: "Prior to 2019",
            icon: <Briefcase className="w-5 h-5" />,
            color: "neon-purple",
            description: "Early AI/ML work in high-growth startup. Developed expertise in transformers, state space models, and agentic architectures.",
            achievements: [
                "Acquired by Mozilla",
                "Early adopter of transformer architectures"
            ],
            tech: ["Machine Learning", "NLP", "Data Analysis"]
        }
    ];

    return (
        <section id="experience" className="py-32 px-8 md:px-24 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <p className="text-neon-purple font-mono text-sm mb-4">// EXPERIENCE</p>
                <h2 className="text-4xl md:text-5xl font-bold">
                    <span className="gradient-text">Where I've worked</span>
                </h2>
            </motion.div>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`relative p-8 bg-dark-surface border border-border rounded-lg hover:border-${exp.color}/50 transition-all duration-500 group`}
                    >
                        {/* Glowing corner accent */}
                        <div className={`absolute top-0 left-0 w-20 h-20 bg-${exp.color}/10 blur-2xl rounded-full`}></div>

                        <div className="relative">
                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 bg-${exp.color}/10 text-${exp.color} rounded-lg`}>
                                        {exp.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-text-primary">{exp.role}</h3>
                                        <p className={`text-${exp.color} font-mono`}>@ {exp.company}</p>
                                    </div>
                                </div>
                                <span className="text-text-secondary font-mono text-sm mt-2 md:mt-0">{exp.period}</span>
                            </div>

                            <p className="text-text-secondary leading-relaxed mb-6">
                                {exp.description}
                            </p>

                            {/* Achievements */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                {exp.achievements.map((achievement, i) => (
                                    <span
                                        key={i}
                                        className="flex items-center gap-2 px-3 py-1 bg-neon-yellow/10 text-neon-yellow border border-neon-yellow/30 rounded text-xs font-mono"
                                    >
                                        <Award className="w-3 h-3" />
                                        {achievement}
                                    </span>
                                ))}
                            </div>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-dark-card text-text-secondary border border-border rounded text-xs font-mono hover:border-neon-green/50 hover:text-neon-green transition-colors"
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

export default Experience;
