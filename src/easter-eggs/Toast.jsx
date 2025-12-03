import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEasterEggs } from './store';

const Toast = () => {
    const { showToast, toastMessage } = useEasterEggs();

    return (
        <AnimatePresence>
            {showToast && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 100 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 50, x: 100 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 z-[9999] max-w-sm"
                >
                    <div className="px-6 py-4 rounded-lg bg-ghost-muted/95 backdrop-blur border-2 border-ghost-accent/50 shadow-2xl">
                        <div className="flex items-center gap-3">
                            <div className="text-2xl">🎮</div>
                            <div>
                                <p className="text-ghost-accent font-mono font-bold text-sm mb-1">
                                    KONAMI CODE ACCEPTED
                                </p>
                                <p className="text-ghost-light/80 text-sm">
                                    {toastMessage}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
