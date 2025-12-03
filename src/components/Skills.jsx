import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Layout, Terminal } from 'lucide-react';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('dev');

    const devSkills = [
        { name: 'React / Next.js', level: 80, icon: <Code className="w-5 h-5" /> },
        { name: 'JavaScript / TS', level: 75, icon: <Terminal className="w-5 h-5" /> },
        { name: 'Tailwind CSS', level: 75, icon: <Layout className="w-5 h-5" /> },
        { name: 'Node.js', level: 50, icon: <Database className="w-5 h-5" /> },
        { name: 'Python', level: 60, icon: <Terminal className="w-5 h-5" /> },
    ];

    const artSkills = [
        { name: 'Digital Illustration', level: 80, icon: <Palette className="w-5 h-5" /> },
        { name: 'Graphics Design', level: 85, icon: <Layout className="w-5 h-5" /> },
        { name: 'Concept Art', level: 75, icon: <Palette className="w-5 h-5" /> },
    ];

    return (
        <section id="skills" className="py-20 bg-ghost-dark/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
                        <span className="text-ghost-secondary">02.</span> SKILL TREE
                    </h2>
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={() => setActiveTab('dev')}
                            className={`px-6 py-2 rounded-full font-mono transition-all duration-300 ${activeTab === 'dev'
                                ? 'bg-ghost-accent text-ghost-dark shadow-[0_0_15px_rgba(0,243,255,0.3)]'
                                : 'bg-ghost-muted text-gray-400 hover:text-ghost-light'
                                }`}
                        >
                            DEV_MODE
                        </button>
                        <button
                            onClick={() => setActiveTab('art')}
                            className={`px-6 py-2 rounded-full font-mono transition-all duration-300 ${activeTab === 'art'
                                ? 'bg-ghost-secondary text-white shadow-[0_0_15px_rgba(112,0,255,0.3)]'
                                : 'bg-ghost-muted text-gray-400 hover:text-ghost-light'
                                }`}
                        >
                            ART_MODE
                        </button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {(activeTab === 'dev' ? devSkills : artSkills).map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-ghost-muted/30 border border-ghost-light/5 p-6 rounded-xl hover:border-ghost-accent/30 transition-colors group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${activeTab === 'dev' ? 'bg-ghost-accent/10 text-ghost-accent' : 'bg-ghost-secondary/10 text-ghost-secondary'}`}>
                                        {skill.icon}
                                    </div>
                                    <span className="font-mono font-bold">{skill.name}</span>
                                </div>
                                <span className="font-mono text-sm text-gray-500">LVL {skill.level}</span>
                            </div>

                            <div className="h-2 bg-ghost-dark rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className={`h-full rounded-full ${activeTab === 'dev' ? 'bg-ghost-accent' : 'bg-ghost-secondary'
                                        }`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
