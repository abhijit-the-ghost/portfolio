import React from 'react';
import { Heart } from 'lucide-react';
import { useEasterEggs } from '../easter-eggs/store';

const Footer = () => {
    const { unlockSecretChamber } = useEasterEggs();

    return (
        <footer className="py-8 border-t border-ghost-muted bg-black/50 text-center relative">
            <p className="text-gray-500 font-mono text-sm flex items-center justify-center gap-2">
                © {new Date().getFullYear()} Ghost. Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> in the Void.
            </p>

            {/* Hidden Glitchy Pixel Easter Egg */}
            <div
                className="glitch-pixel absolute bottom-2 right-2"
                onClick={unlockSecretChamber}
                title="..."
            />
        </footer>
    );
};

export default Footer;
