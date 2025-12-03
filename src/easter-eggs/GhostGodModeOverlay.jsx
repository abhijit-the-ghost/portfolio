import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEasterEggs } from './store';
import useKonamiOverride from './useKonamiOverride';
import MatrixRainCanvas from './MatrixRainCanvas';
import OverrideTerminal from './OverrideTerminal';
import LiveStatsPanel from './LiveStatsPanel';
import EditModeLayer from './EditModeLayer';

const GhostGodModeOverlay = () => {
    const { godModeActive, activateGodMode, deactivateGodMode, editModeActive, toggleEditMode } = useEasterEggs();
    const [phase, setPhase] = useState('idle'); // idle, matrix, active

    // Trigger God Mode via Konami Code
    useKonamiOverride(() => {
        if (!godModeActive) {
            activateGodMode();
            setPhase('matrix');
        }
    });

    // Handle Matrix completion
    const handleMatrixComplete = () => {
        setPhase('active');
    };

    // Handle ESC to exit
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && godModeActive) {
                deactivateGodMode();
                setPhase('idle');
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [godModeActive, deactivateGodMode]);

    if (!godModeActive) return null;

    return createPortal(
        <div className="fixed inset-0 z-[10000] font-mono">
            {/* Phase 1: Matrix Rain Intro */}
            <AnimatePresence>
                {phase === 'matrix' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black"
                    >
                        <MatrixRainCanvas onComplete={handleMatrixComplete} />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500 text-xl font-bold space-y-2">
                            <TypewriterText text="> initializing developer override..." delay={0} />
                            <TypewriterText text="> injecting privileges..." delay={1000} />
                            <TypewriterText text="> unlocking god-tier access..." delay={2000} />
                            <TypewriterText text="> ACCESS GRANTED ✓" delay={3000} className="text-green-400" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Phase 2: God Mode Overlay */}
            <AnimatePresence>
                {phase === 'active' && (
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                        className="absolute inset-0 pointer-events-none" // Allow clicking through to underlying app (unless interacting with overlay UI)
                    >
                        {/* Top Bar / Stats */}
                        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start pointer-events-auto">
                            <LiveStatsPanel />

                            {/* <div className="bg-black/80 border border-green-500/30 p-4 rounded text-green-400">
                                <h3 className="font-bold mb-2 border-b border-green-500/30 pb-1">CONTROLS</h3>
                                <div className="space-y-2 flex flex-col">
                                    <button
                                        onClick={toggleEditMode}
                                        className={`px-3 py-1 text-xs border ${editModeActive ? 'bg-green-500 text-black border-green-500' : 'border-green-500/50 hover:bg-green-500/20'} transition-colors`}
                                    >
                                        {editModeActive ? 'DISABLE EDIT MODE' : 'ENABLE EDIT MODE'}
                                    </button>
                                    <button
                                        onClick={() => { deactivateGodMode(); setPhase('idle'); }}
                                        className="px-3 py-1 text-xs border border-red-500/50 text-red-400 hover:bg-red-500/20 transition-colors"
                                    >
                                        EXIT GOD MODE
                                    </button>
                                </div>
                            </div> */}
                        </div>

                        {/* Bottom Terminal */}
                        <div className="absolute bottom-0 left-0 right-0 pointer-events-auto">
                            <OverrideTerminal />
                        </div>

                        {/* Edit Mode Layer */}
                        <EditModeLayer active={editModeActive} />

                        {/* Watermark */}
                        <div className="absolute bottom-52 right-4 text-green-500/20 text-9xl font-black select-none pointer-events-none">
                            GOD MODE
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>,
        document.body
    );
};

// Simple typewriter effect component
const TypewriterText = ({ text, delay, className = "" }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    if (!visible) return null;
    return <div className={className}>{text}</div>;
};

export default GhostGodModeOverlay;
