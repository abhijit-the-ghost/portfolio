import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useEasterEggs } from './store';

const messages = [
    { type: 'dev', text: '💡 Pro tip: Always use semantic HTML!' },
    { type: 'dev', text: '🚀 Remember: Premature optimization is the root of all evil.' },
    { type: 'dev', text: '⚡ Console.log() is a developer\'s best friend!' },
    { type: 'anime', text: '🍃 "Believe it!" - Naruto' },
    { type: 'anime', text: '⚔️ "I am the bone of my sword" - Fate' },
    { type: 'anime', text: '🔥 "Plus Ultra!" - My Hero Academia' },
    { type: 'anime', text: '👊 "I\'ll take a potato chip... and eat it!" - Death Note' },
    { type: 'joke', text: '😄 Why do programmers prefer dark mode? Light attracts bugs!' },
    { type: 'joke', text: '🤓 There are 10 types of people: those who understand binary and those who don\'t.' },
    { type: 'joke', text: '☕ Java: Write once, debug everywhere.' },
    { type: 'fact', text: '🎮 Ghost loves late-night coding sessions with NFAK qawwali' },
    { type: 'fact', text: '🎨 Every pixel on this site was crafted with love!' },
    { type: 'fact', text: '✨ This website has more easter eggs than you think...' },
    { type: 'fact', text: '🌙 Ghost codes best between midnight and 4 AM.' },
    { type: 'dev', text: '🎯 CSS Grid + Flexbox = Layout mastery!' },
    { type: 'anime', text: '💫 "The world isn\'t perfect, but it\'s there for us trying the best it can" - FMA' },
    { type: 'joke', text: '🐛 99 bugs in the code, take one down, patch it around, 127 bugs in the code!' },
    { type: 'fact', text: '🎵 This site was built while listening to anime OSTs on repeat!' },
    { type: 'dev', text: '🔧 Clean code is better than clever code!' },
    { type: 'anime', text: '🌸 "People\'s lives don\'t end when they die" - Code Geass' },
    { type: 'movie', text: '🎬 "Dying is the day worth living for" - Captain Barbosa' },
    { type: "suggestion", text: "Try typing 'Konami' code" }

];

const GhostCompanion = () => {
    const { ghostVisible, showGhost, hideGhost, ghostMessage, setMessage, incrementGhostClicks } = useEasterEggs();
    const [showMessageBubble, setShowMessageBubble] = useState(false);

    // Fixed position: bottom center
    const position = {
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
    };

    useEffect(() => {
        // Initial appearance after 5-10 seconds
        const initialDelay = Math.random() * 5000 + 5000;
        const initialTimer = setTimeout(() => {
            showGhost();
        }, initialDelay);

        return () => clearTimeout(initialTimer);
    }, []);

    useEffect(() => {
        if (!ghostVisible) {
            // Reappear after 20-40 seconds
            const reappearDelay = Math.random() * 20000 + 20000;
            const reappearTimer = setTimeout(() => {
                showGhost();
            }, reappearDelay);

            return () => clearTimeout(reappearTimer);
        }
    }, [ghostVisible]);

    const handleClick = () => {
        // Show random message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        setMessage(randomMessage.text);
        setShowMessageBubble(true);

        // Increment click counter (triggers secret chamber after 3 clicks)
        incrementGhostClicks();

        // Hide message and ghost after 4 seconds
        setTimeout(() => {
            setShowMessageBubble(false);
            setTimeout(() => {
                hideGhost();
            }, 500);
        }, 4000);
    };

    if (!ghostVisible) return null;

    return createPortal(
        <div
            className="ghost-companion"
            style={{
                position: 'fixed',
                ...position,
                zIndex: 9999,
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
            }}
            onClick={handleClick}
        >
            {/* Ghost Character */}
            <div className="ghost-character">
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ghost-svg"
                >
                    {/* Ghost body */}
                    <path
                        d="M40 10C25 10 15 20 15 35V60L20 55L25 60L30 55L35 60L40 55L45 60L50 55L55 60L60 55L65 60V35C65 20 55 10 40 10Z"
                        fill="rgba(0, 243, 255, 0.5)"
                        className="ghost-body"
                    />
                    {/* Eyes */}
                    <circle cx="30" cy="35" r="4" fill="#0a0a0f" />
                    <circle cx="50" cy="35" r="4" fill="#0a0a0f" />
                    {/* Mouth */}
                    <path
                        d="M30 45Q40 50 50 45"
                        stroke="#0a0a0f"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
            </div>

            {/* Message Bubble */}
            {showMessageBubble && ghostMessage && (
                <div className="ghost-message-bubble">
                    <div className="bubble-content">
                        {ghostMessage}
                    </div>
                </div>
            )}
        </div>,
        document.body
    );
};

export default GhostCompanion;
