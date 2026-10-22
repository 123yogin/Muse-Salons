import { useEffect, useState } from 'react';
import LandingPage from './pages/LandingPage'
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';

function App() {
  // Show the logo intro only on the first visit in a browser session
  const [isLoading, setIsLoading] = useState(() => {
    try {
      return !sessionStorage.getItem('muse-intro-seen');
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!isLoading) return;
    try {
      sessionStorage.setItem('muse-intro-seen', '1');
    } catch {
      // Storage unavailable; the intro will just show again next time
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Matches animation duration in Preloader

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <LandingPage />
    </>
  )
}

export default App
