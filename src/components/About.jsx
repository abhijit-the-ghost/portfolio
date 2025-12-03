import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brush, Gamepad } from 'lucide-react';
import meImage from '../assets/meImage.jpg';
import { useEasterEggs } from '../easter-eggs/store';

const About = () => {
    const { unlockSecretChamber } = useEasterEggs();
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    {/* Avatar / Visual Side */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-ghost-accent to-ghost-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-square rounded-2xl bg-ghost-muted overflow-hidden border border-ghost-accent/20">
                            {/* Avatar Image */}
                            <img
                                src={meImage}
                                alt="Ghost Avatar"
                                className="w-full h-full object-cover cursor-pointer"
                                onDoubleClick={unlockSecretChamber}
                                title="Double-click for a surprise..."
                            />

                            {/* Glitch Overlay Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-ghost-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Floating Elements */}
                            <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur rounded-lg border border-ghost-accent/30 animate-bounce">
                                <Cpu className="w-5 h-5 text-ghost-accent" />
                            </div>
                            <div className="absolute bottom-4 left-4 p-2 bg-black/50 backdrop-blur rounded-lg border border-ghost-secondary/30 animate-pulse">
                                <Brush className="w-5 h-5 text-ghost-secondary" />
                            </div>
                        </div>
                    </div>

                    {/* Text Content Side */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-mono">
                            <span className="text-ghost-accent">01.</span> WHO IS Abhijt?
                        </h2>

                        <div className="prose prose-invert max-w-none text-gray-400">
                            <p className="text-lg leading-relaxed">
                                I am a digital artisan navigating the intersection of code and creativity.
                                By day, I architect scalable frontend systems; by night, I explore digital realms through art and gaming.
                            </p>
                            <p className="text-lg leading-relaxed">
                                My philosophy is simple: <span className="text-ghost-light font-bold">Build worlds, not just websites.</span>
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 rounded-xl bg-ghost-muted/30 border border-ghost-light/5 hover:border-ghost-accent/50 transition-colors group">
                                <h3 className="font-mono text-ghost-accent mb-2 flex items-center gap-2">
                                    <Cpu className="w-4 h-4" /> Developer
                                </h3>
                                <p className="text-sm text-gray-500">React, TypeScript, Next.js, Node.js</p>
                            </div>
                            <div className="p-4 rounded-xl bg-ghost-muted/30 border border-ghost-light/5 hover:border-ghost-secondary/50 transition-colors group">
                                <h3 className="font-mono text-ghost-secondary mb-2 flex items-center gap-2">
                                    <Brush className="w-4 h-4" /> Artist
                                </h3>
                                <p className="text-sm text-gray-500">Digital Art</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
