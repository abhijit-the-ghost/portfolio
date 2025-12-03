import React, { useState, useEffect, useRef } from 'react';
import { useEasterEggs } from './store';

const OverrideTerminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        'override terminal enabled',
        "type 'help' for commands"
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);
    const { unlockSecretChamber, deactivateGodMode } = useEasterEggs();

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        // Auto-focus input
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [history]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let response = '';

        switch (trimmedCmd) {
            case 'help':
                response = 'Available commands: help, whoami, show-secret, reset, clear, status';
                break;
            case 'whoami':
                response = 'root@ghost-system (GOD MODE)';
                break;
            case 'show-secret':
                unlockSecretChamber();
                response = 'Secret chamber unlocked.';
                break;
            case 'reset':
                deactivateGodMode();
                return; // Exit immediately
            case 'clear':
                setHistory([]);
                return;
            case 'status':
                response = 'System Override: ACTIVE | Privileges: MAX';
                break;
            case '':
                return;
            default:
                response = `Command not found: ${trimmedCmd}`;
        }

        setHistory(prev => [...prev, `> ${cmd}`, response]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className="w-full h-48 bg-black/90 border-t border-green-500/50 font-mono text-sm p-4 overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto mb-2 space-y-1 scrollbar-hide">
                {history.map((line, i) => (
                    <div key={i} className="text-green-400/80">{line}</div>
                ))}
                <div ref={bottomRef} />
            </div>
            <div className="flex items-center text-green-500">
                <span className="mr-2">{'>'}</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-green-400 placeholder-green-700"
                    placeholder="Enter command..."
                    autoFocus
                />
            </div>
        </div>
    );
};

export default OverrideTerminal;
