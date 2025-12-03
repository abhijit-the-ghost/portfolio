import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEasterEggs } from './store';

const SecretChamber = () => {
    const { secretChamberOpen, closeSecretChamber } = useEasterEggs();

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && secretChamberOpen) {
                closeSecretChamber();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [secretChamberOpen, closeSecretChamber]);

    return (
        <AnimatePresence>
            {secretChamberOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[10000] flex items-center justify-center"
                    onClick={closeSecretChamber}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md secret-chamber-bg" />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="relative z-10 max-w-4xl w-full mx-4 p-6 bg-gradient-to-br from-ghost-dark via-ghost-muted to-ghost-dark border-2 border-ghost-accent/30 rounded-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeSecretChamber}
                            className="absolute top-3 right-3 p-2 rounded-lg bg-ghost-muted/50 hover:bg-ghost-accent/20 border border-ghost-accent/30 transition-all"
                        >
                            <X className="w-5 h-5 text-ghost-accent" />
                        </button>

                        {/* Title */}
                        <div className="text-center mb-6">
                            <h2 className="text-3xl font-bold font-mono mb-3 text-ghost-accent">
                                SECRET CHAMBER
                            </h2>
                            <p className="text-base text-gray-400 italic">
                                ✨ You found a hidden room inside Ghost's world. ✨
                            </p>
                        </div>

                        {/* Artworks Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {[1, 2, 3, 4].map((num) => (
                                <motion.div
                                    key={num}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + num * 0.1 }}
                                    className="relative aspect-video rounded-lg overflow-hidden border border-ghost-secondary/30 group"
                                >
                                    {/* Placeholder Art */}
                                    <div className="w-full h-full bg-gradient-to-br from-ghost-accent/10 via-ghost-secondary/10 to-ghost-accent/10 flex items-center justify-center">
                                        <div className="text-center p-3">
                                            <div className="text-5xl mb-1">🎨</div>
                                            <p className="text-ghost-light/50 font-mono text-xs">
                                                Secret Artwork #{num}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-ghost-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                                        <div className="p-3">
                                            <p className="text-ghost-light font-mono text-xs">
                                                Hidden piece from Ghost's collection
                                            </p>
                                        </div>
                                    </div>

                                    {/* Glowing border on hover */}
                                    <div className="absolute inset-0 border-2 border-ghost-secondary opacity-0 group-hover:opacity-50 transition-opacity rounded-lg" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer Message */}
                        <div className="text-center text-sm text-gray-500 font-mono">
                            Press ESC or click outside to close
                        </div>
                    </motion.div>

                    {/* Animated particles background */}
                    <div className="particles-container" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SecretChamber;
