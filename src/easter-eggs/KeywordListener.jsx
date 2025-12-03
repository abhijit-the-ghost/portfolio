import React, { useEffect } from 'react';
import { useEasterEggs } from './store';

/**
 * KeywordListener Component
 * Listens for the "ghostworld" keyword to unlock the Secret Chamber
 */
const KeywordListener = () => {
    const { unlockSecretChamber } = useEasterEggs();

    useEffect(() => {
        let typedString = '';
        let typingTimeout;

        const handleKeyDown = (e) => {
            // Ignore if user is typing in an input/textarea
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }

            // Add the typed character to the string
            typedString += e.key.toLowerCase();

            // Keep only the last 20 characters
            if (typedString.length > 20) {
                typedString = typedString.slice(-20);
            }

            // Check if "ghostworld" was typed
            if (typedString.includes('ghostworld')) {
                unlockSecretChamber();
                typedString = ''; // Reset
            }

            // Clear typed string after 3 seconds of inactivity
            clearTimeout(typingTimeout);
            typingTimeout = setTimeout(() => {
                typedString = '';
            }, 3000);
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            clearTimeout(typingTimeout);
        };
    }, [unlockSecretChamber]);

    return null; // This component doesn't render anything
};

export default KeywordListener;
