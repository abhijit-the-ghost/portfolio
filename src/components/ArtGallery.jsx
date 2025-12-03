import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const ArtGallery = () => {
    const [selectedArt, setSelectedArt] = useState(null);

    const artworks = [
        { id: 1, title: 'Akaza', type: 'Character Design', image: '/src/assets/sketches/akaza.png' },
        { id: 2, title: 'Hinata', type: 'Character Design', image: '/src/assets/sketches/hinata.jpeg' },
        { id: 3, title: 'Naruto', type: 'Character Design', image: '/src/assets/sketches/naruto.jpeg' },
        { id: 4, title: 'Uchiha Bros', type: 'Character Design', image: '/src/assets/sketches/uchihaBros.jpeg' },
    ];

    return (
        <section id="art" className="py-20 bg-black/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12 flex items-end justify-between"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
                            <span className="text-ghost-secondary">04.</span> VISUAL ARCHIVES
                        </h2>
                        <p className="text-gray-400">Digital illustrations and concept work.</p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {artworks.map((art, index) => (
                        <motion.div
                            key={art.id}
                            onClick={() => setSelectedArt(art)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-[3/4] cursor-pointer group overflow-hidden rounded-lg bg-ghost-muted"
                        >
                            {/* Art Image */}
                            <img
                                src={art.image}
                                alt={art.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="font-bold text-white">{art.title}</h3>
                                <p className="text-xs text-gray-300 font-mono">{art.type}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedArt && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedArt(null)}
                            className="absolute inset-0"
                        />
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative w-full max-w-4xl aspect-video bg-ghost-dark rounded-xl overflow-hidden shadow-2xl border border-ghost-muted"
                        >
                            <button
                                onClick={() => setSelectedArt(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-white/20 transition-colors"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>

                            <img
                                src={selectedArt.image}
                                alt={selectedArt.title}
                                className="absolute inset-0 w-full h-full object-contain"
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                                <h2 className="text-3xl font-bold mb-2">{selectedArt.title}</h2>
                                <p className="text-ghost-accent font-mono">{selectedArt.type}</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ArtGallery;
