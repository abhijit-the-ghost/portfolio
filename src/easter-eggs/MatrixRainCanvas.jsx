import React, { useEffect, useRef } from 'react';

const MatrixRainCanvas = ({ onComplete }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Matrix characters
        const chars = '0123456789ABCDEF';
        const charArray = chars.split('');

        const fontSize = 16;
        const columns = canvas.width / fontSize;

        // Array of drops - one per column
        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        let animationId;
        let frameCount = 0;
        const maxFrames = 180; // Run for ~3 seconds at 60fps

        const draw = () => {
            // Black BG for the canvas
            // Translucent BG to show trail
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0'; // Green text
            ctx.font = `${fontSize}px monospace`;

            // Loop over drops
            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Sending the drop back to the top randomly after it has crossed the screen
                // adding a randomness to the reset to make the drops scattered on the Y axis
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Incrementing Y coordinate
                drops[i]++;
            }

            frameCount++;
            if (frameCount < maxFrames) {
                animationId = requestAnimationFrame(draw);
            } else {
                // Fade out effect
                canvas.style.transition = 'opacity 1s ease';
                canvas.style.opacity = '0';
                setTimeout(onComplete, 1000);
            }
        };

        draw();

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, [onComplete]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[10001] pointer-events-none"
            style={{ background: 'black' }}
        />
    );
};

export default MatrixRainCanvas;
