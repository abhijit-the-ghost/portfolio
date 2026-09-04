import React from 'react';

// LinkedIn-style pill buttons. Render as a <button> by default, or pass
// `as="a"` for links. Variants match LinkedIn's primary / outlined styles.
const base =
    'inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
    primary: 'bg-accent text-white hover:bg-accent-strong',
    secondary: 'border border-accent text-link hover:bg-accent/10',
    tertiary: 'border border-muted/40 text-content hover:bg-content/5',
};

const Button = ({ as = 'button', variant = 'primary', className = '', children, ...props }) => {
    const Comp = as;
    return (
        <Comp className={`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
        </Comp>
    );
};

export default Button;
