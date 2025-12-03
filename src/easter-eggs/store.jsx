import React, { createContext, useContext, useState } from 'react';

const EasterEggsContext = createContext();

export const EasterEggsProvider = ({ children }) => {
    const [ghostVisible, setGhostVisible] = useState(false);
    const [ghostMessage, setGhostMessage] = useState(null);
    const [ghostClickCount, setGhostClickCount] = useState(0);
    const [secretChamberUnlocked, setSecretChamberUnlocked] = useState(false);
    const [secretChamberOpen, setSecretChamberOpen] = useState(false);
    const [godModeActive, setGodModeActive] = useState(false);
    const [editModeActive, setEditModeActive] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    // Ghost companion state
    const showGhost = () => setGhostVisible(true);
    const hideGhost = () => {
        setGhostVisible(false);
        setGhostMessage(null);
    };

    const setMessage = (msg) => setGhostMessage(msg);

    const incrementGhostClicks = () => {
        const newCount = ghostClickCount + 1;
        setGhostClickCount(newCount);

        // Unlock secret chamber after 3 clicks
        if (newCount >= 3 && !secretChamberUnlocked) {
            unlockSecretChamber();
        }
    };

    // Secret chamber state
    const unlockSecretChamber = () => {
        setSecretChamberUnlocked(true);
        setSecretChamberOpen(true);
    };

    const closeSecretChamber = () => {
        setSecretChamberOpen(false);
    };

    // God Mode state
    const activateGodMode = () => {
        setGodModeActive(true);
    };

    const deactivateGodMode = () => {
        setGodModeActive(false);
        setEditModeActive(false);
    };

    const toggleEditMode = () => {
        setEditModeActive(prev => !prev);
    };

    // Toast notifications
    const displayToast = (message) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const value = {
        ghostVisible,
        showGhost,
        hideGhost,
        ghostMessage,
        setMessage,
        ghostClickCount,
        incrementGhostClicks,
        secretChamberUnlocked,
        secretChamberOpen,
        unlockSecretChamber,
        closeSecretChamber,
        godModeActive,
        activateGodMode,
        deactivateGodMode,
        editModeActive,
        toggleEditMode,
        showToast,
        toastMessage,
        displayToast,
    };

    return (
        <EasterEggsContext.Provider value={value}>
            {children}
        </EasterEggsContext.Provider>
    );
};

export const useEasterEggs = () => {
    const context = useContext(EasterEggsContext);
    if (!context) {
        throw new Error('useEasterEggs must be used within EasterEggsProvider');
    }
    return context;
};
