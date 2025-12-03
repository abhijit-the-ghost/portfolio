import React, { useEffect } from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ArtGallery from './components/ArtGallery';
import GameStats from './components/GameStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Easter Eggs
import { EasterEggsProvider, useEasterEggs } from './easter-eggs/store';
import GhostCompanion from './easter-eggs/GhostCompanion';
import SecretChamber from './easter-eggs/SecretChamber';
import Toast from './easter-eggs/Toast';
import KeywordListener from './easter-eggs/KeywordListener';
import GhostGodModeOverlay from './easter-eggs/GhostGodModeOverlay';
import './easter-eggs/easter-eggs.css';

function AppContent() {
  const { displayToast } = useEasterEggs();

  return (
    <>
      <Layout>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ArtGallery />
        <GameStats />
        <Contact />
        <Footer />
      </Layout>

      {/* Easter Eggs */}
      <GhostCompanion />
      <SecretChamber />
      <GhostGodModeOverlay />
      <Toast />
      <KeywordListener />
    </>
  );
}

function App() {
  return (
    <EasterEggsProvider>
      <AppContent />
    </EasterEggsProvider>
  );
}

export default App;
