import { useEffect, useState } from 'react';
import './App.css'
import LandingPage from './pages/LandingPage'
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Matches animation duration in Preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && <LandingPage />}
    </>
  )
}

export default App
