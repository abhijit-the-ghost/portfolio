import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Standard LinkedIn-style white content card: rounded, hairline border, soft
// shadow, optional title row with a right-aligned action slot. Renders as a
// <section> so `id` anchors work and clear the fixed top bar.
const Card = ({ id, title, action, className = '', children }) => {
    const prefersReduced = useReducedMotion();

    return (
        <motion.section
            id={id}
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-lg border border-line bg-surface shadow-sm ${className}`}
        >
            <div className="p-4 sm:p-6">
                {title && (
                    <div className="mb-4 flex items-center justify-between gap-4">
                        <h2 className="text-xl font-semibold text-content">{title}</h2>
                        {action}
                    </div>
                )}
                {children}
            </div>
        </motion.section>
    );
};

export default Card;
