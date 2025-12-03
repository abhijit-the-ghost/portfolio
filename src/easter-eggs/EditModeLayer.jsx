import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const EditModeLayer = ({ active }) => {
    const [hoveredElement, setHoveredElement] = useState(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        if (!active) return;

        const handleMouseOver = (e) => {
            // Find the nearest significant parent element
            const target = e.target.closest('div, section, header, footer, h1, h2, p, img, button');

            if (target && target !== overlayRef.current && !overlayRef.current?.contains(target)) {
                const rect = target.getBoundingClientRect();
                setHoveredElement({
                    rect,
                    tagName: target.tagName.toLowerCase(),
                    className: target.className,
                    element: target
                });
            }
        };

        const handleClick = (e) => {
            if (!active || !hoveredElement) return;
            e.preventDefault();
            e.stopPropagation();

            // Simple "edit" effect - just log to console for now as requested "metadata popup"
            // In a real edit mode, this would open a property editor
            console.log('Selected Element:', hoveredElement.element);
            alert(`Element: <${hoveredElement.tagName}>\nClass: ${hoveredElement.className}\nSize: ${Math.round(hoveredElement.rect.width)}x${Math.round(hoveredElement.rect.height)}`);
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('click', handleClick, true); // Capture phase

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('click', handleClick, true);
        };
    }, [active, hoveredElement]);

    if (!active || !hoveredElement) return null;

    return createPortal(
        <div
            ref={overlayRef}
            className="fixed z-[99999] pointer-events-none border-2 border-green-500 bg-green-500/10 transition-all duration-75"
            style={{
                top: hoveredElement.rect.top,
                left: hoveredElement.rect.left,
                width: hoveredElement.rect.width,
                height: hoveredElement.rect.height,
            }}
        >
            <div className="absolute -top-6 left-0 bg-green-500 text-black text-xs font-mono px-2 py-1">
                &lt;{hoveredElement.tagName}&gt;
            </div>
        </div>,
        document.body
    );
};

export default EditModeLayer;
