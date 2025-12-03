import { useEffect, useRef } from 'react';

const KONAMI_CODE = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'KeyB',
    'KeyA',
];

const useKonamiOverride = (onTrigger) => {
    const sequenceIndex = useRef(0);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const currentKey = e.code;
            const expectedKey = KONAMI_CODE[sequenceIndex.current];

            if (currentKey === expectedKey) {
                // Correct key pressed, advance sequence
                sequenceIndex.current += 1;

                // Check if sequence is complete
                if (sequenceIndex.current === KONAMI_CODE.length) {
                    onTrigger();
                    sequenceIndex.current = 0; // Reset
                }
            } else {
                // Wrong key, reset sequence
                sequenceIndex.current = 0;

                // Edge case: if the wrong key is actually the start of the sequence (ArrowUp)
                if (currentKey === KONAMI_CODE[0]) {
                    sequenceIndex.current = 1;
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onTrigger]);
};

export default useKonamiOverride;
