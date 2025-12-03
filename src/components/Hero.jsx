import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Palette, Gamepad2 } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ghost-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ghost-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-ghost-accent font-mono mb-4 text-lg tracking-widest">SYSTEM ONLINE</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-ghost-accent to-ghost-secondary text-glow">Abhijit's World</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Where code meets creativity. I craft immersive digital experiences, blending frontend engineering with artistic vision.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex justify-center gap-6 mb-12"
                >
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="p-3 rounded-lg bg-ghost-muted/50 group-hover:bg-ghost-accent/20 transition-colors">
                            <Code className="w-6 h-6 text-ghost-accent" />
                        </div>
                        <span className="text-xs font-mono text-gray-500">DEV</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="p-3 rounded-lg bg-ghost-muted/50 group-hover:bg-ghost-secondary/20 transition-colors">
                            <Palette className="w-6 h-6 text-ghost-secondary" />
                        </div>
                        <span className="text-xs font-mono text-gray-500">ART</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="p-3 rounded-lg bg-ghost-muted/50 group-hover:bg-pink-500/20 transition-colors">
                            <Gamepad2 className="w-6 h-6 text-pink-500" />
                        </div>
                        <span className="text-xs font-mono text-gray-500">GAME</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <a
                        href="#about"
                        className="inline-block px-8 py-3 rounded-full bg-ghost-accent/10 border border-ghost-accent text-ghost-accent font-mono hover:bg-ghost-accent hover:text-ghost-dark transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.2)] hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]"
                    >
                        INITIALIZE_SEQUENCE
                    </a>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
            >
                <ChevronDown className="w-8 h-8 opacity-50" />
            </motion.div>
        </section>
    );
};

export default Hero;
