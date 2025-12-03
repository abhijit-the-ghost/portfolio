import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-ghost-dark text-ghost-light font-sans selection:bg-ghost-accent selection:text-ghost-dark">
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #2a2a35 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>
            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
};

export default Layout;
