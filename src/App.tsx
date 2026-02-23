import { useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorVariant, setCursorVariant] = useState('default');
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleCursorEnter = () => setCursorVariant('hover');
  const handleCursorLeave = () => setCursorVariant('default');

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <CustomCursor variant={cursorVariant} />
      
      <div className="cyber-grid" />
      <div className="scanlines" />
      
      <ParticleBackground />
      
      <div ref={mainRef} className="relative z-10">
        <Navigation 
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />
        
        <main>
          <Hero 
            onCursorEnter={handleCursorEnter}
            onCursorLeave={handleCursorLeave}
          />
          <About 
            onCursorEnter={handleCursorEnter}
            onCursorLeave={handleCursorLeave}
          />
          <Skills 
            onCursorEnter={handleCursorEnter}
            onCursorLeave={handleCursorLeave}
          />
          <Projects 
            onCursorEnter={handleCursorEnter}
            onCursorLeave={handleCursorLeave}
          />
          <Contact 
            onCursorEnter={handleCursorEnter}
            onCursorLeave={handleCursorLeave}
          />
        </main>
      </div>
    </>
  );
}

export default App;
