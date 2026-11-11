import React from 'react';

export const Button = ({ children, href, onClick, variant = 'primary', className = '', ...props }) => {
    const base = 'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60';
    const styles = {
        primary: 'bg-[#0a66c2] text-white hover:bg-[#004182]',
        secondary: 'border border-line bg-surface text-content hover:bg-content/5',
        ghost: 'text-muted hover:text-content',
    };
    const Tag = href ? 'a' : 'button';
    return (
        <Tag href={href} onClick={onClick} className={`${base} ${styles[variant] || styles.primary} ${className}`} {...props}>
            {children}
        </Tag>
    );
};
