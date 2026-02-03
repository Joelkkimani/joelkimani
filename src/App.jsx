import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import LiquidBackground from './components/LiquidBackground';
import Preloader from './components/Preloader';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Work from './sections/Work';
import CV from './sections/CV';
import Contact from './sections/Contact';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      <LiquidBackground />
      <AnimatePresence>
        {!started && <Preloader onStart={() => setStarted(true)} />}
      </AnimatePresence>

      {started && (
        <Layout>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Work />
          <CV />
          <Contact />
        </Layout>
      )}
    </>
  );
}

export default App;
