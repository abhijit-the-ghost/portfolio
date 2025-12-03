import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Star } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Lofi Digital Clock',
            description: 'A lofi themed digital clock which changes its theme according to the time of day.',
            tags: ['React', "TailwindCSS"],
            type: 'Web App',
            rarity: 'Common',
            link: 'https://abhijit-the-ghost.github.io/lofi-digital-clock',
            github: 'https://github.com/abhijit-the-ghost/lofi-digital-clock'
        },
        {
            title: 'Aninfo',
            description: 'Anime information website with search functionality.',
            tags: ['React', 'TypeScript', 'TailwindCSS'],
            type: 'Web App',
            rarity: 'Common',
            link: 'https://abhijit-the-ghost.github.io/aninfo',
            github: 'https://github.com/abhijit-the-ghost/lofi-digital-clock'
        },
    ];

    const getRarityColor = (rarity) => {
        switch (rarity) {
            case 'Legendary': return 'text-yellow-400 border-yellow-400/50 shadow-yellow-400/20';
            case 'Epic': return 'text-purple-400 border-purple-400/50 shadow-purple-400/20';
            case 'Rare': return 'text-blue-400 border-blue-400/50 shadow-blue-400/20';
            default: return 'text-gray-400 border-gray-400/50';
        }
    };

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
                        <span className="text-ghost-accent">03.</span> QUEST LOG
                    </h2>
                    <p className="text-gray-400 max-w-2xl">
                        Completed missions and ongoing campaigns. Each artifact represents a milestone in the journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-ghost-muted/20 rounded-xl overflow-hidden border border-ghost-light/5 hover:border-ghost-accent/30 transition-all duration-300 hover:transform hover:-translate-y-2"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <Folder className="w-10 h-10 text-ghost-accent opacity-80" />
                                    <div className="flex gap-4">
                                        <a href={project.github} className="text-gray-400 hover:text-ghost-light transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.link} className="text-gray-400 hover:text-ghost-light transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-ghost-accent transition-colors">
                                    {project.title}
                                </h3>

                                <div className={`text-xs font-mono mb-4 inline-flex items-center gap-1 px-2 py-1 rounded border ${getRarityColor(project.rarity)} bg-black/20`}>
                                    <Star className="w-3 h-3" /> {project.rarity}
                                </div>

                                <p className="text-gray-400 text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono text-ghost-secondary">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-ghost-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
