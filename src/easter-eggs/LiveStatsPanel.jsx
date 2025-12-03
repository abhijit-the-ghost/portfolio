import React, { useEffect, useState, useRef } from 'react';

const LiveStatsPanel = () => {
    const [fps, setFps] = useState(0);
    const [domNodes, setDomNodes] = useState(0);
    const frameCount = useRef(0);
    const lastTime = useRef(performance.now());

    useEffect(() => {
        let animationId;

        const updateStats = () => {
            const now = performance.now();
            frameCount.current++;

            if (now - lastTime.current >= 1000) {
                setFps(frameCount.current);
                frameCount.current = 0;
                lastTime.current = now;

                // Update DOM node count roughly every second
                setDomNodes(document.getElementsByTagName('*').length);
            }

            animationId = requestAnimationFrame(updateStats);
        };

        updateStats();

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className="bg-black/80 border border-green-500/30 p-4 rounded font-mono text-xs text-green-400 w-64">
            <h3 className="text-green-500 font-bold mb-2 border-b border-green-500/30 pb-1">SYSTEM STATS</h3>
            <div className="space-y-1">
                <div className="flex justify-between">
                    <span>FPS:</span>
                    <span className={fps < 30 ? 'text-red-500' : 'text-green-400'}>{fps}</span>
                </div>
                <div className="flex justify-between">
                    <span>DOM Nodes:</span>
                    <span>{domNodes}</span>
                </div>
                <div className="flex justify-between">
                    <span>React Ver:</span>
                    <span>{React.version}</span>
                </div>
                <div className="flex justify-between">
                    <span>Route:</span>
                    <span>{window.location.pathname}</span>
                </div>
                <div className="flex justify-between">
                    <span>Memory:</span>
                    <span>{performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) + ' MB' : 'N/A'}</span>
                </div>
            </div>
        </div>
    );
};

export default LiveStatsPanel;
