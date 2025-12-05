import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Experience', href: '#experience', color: 'hover:text-neon-green' },
        { name: 'Work', href: '#projects', color: 'hover:text-neon-purple' },
        { name: 'Skills', href: '#skills', color: 'hover:text-neon-blue' },
        { name: 'Contact', href: '#contact', color: 'hover:text-neon-yellow' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-dark-bg/95 backdrop-blur-md py-4 border-b border-border' : 'bg-transparent py-6'}`}>
            <div className="max-w-6xl mx-auto px-8 md:px-24 flex justify-between items-center">
                <motion.a
                    href="#"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-bold"
                >
                    <span className="text-neon-green">&lt;</span>
                    <span className="text-text-primary">MH</span>
                    <span className="text-neon-green">/&gt;</span>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-8">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <a
                                    href={link.href}
                                    className={`text-text-secondary ${link.color} text-sm font-mono tracking-wide transition-colors duration-300`}
                                >
                                    <span className="text-neon-green mr-1">{String(index + 1).padStart(2, '0')}.</span>
                                    {link.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.a
                        href="/mo_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="px-5 py-2 border border-neon-green text-neon-green text-sm font-mono rounded hover:bg-neon-green/10 hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300"
                    >
                        Resume
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-neon-green">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-dark-bg/98 flex justify-center items-center md:hidden"
                >
                    <ul className="flex flex-col items-center gap-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-text-primary text-2xl font-mono ${link.color} transition-colors`}
                                >
                                    <span className="text-neon-green mr-2">{String(index + 1).padStart(2, '0')}.</span>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="/mo_resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 border border-neon-green text-neon-green font-mono rounded hover:bg-neon-green/10 transition-colors"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
