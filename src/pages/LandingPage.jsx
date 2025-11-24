import { motion, useScroll, useSpring } from 'framer-motion';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import StickyCTA from '../components/StickyCTA';

const LandingPage = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                style={{
                    scaleX,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '5px',
                    background: 'var(--color-gold)',
                    transformOrigin: '0%',
                    zIndex: 100
                }}
            />
            
            <Header />
            <main>
                <Hero />
                <Services />
                <Gallery />
                <About />
                <Team />
                <Contact />
            </main>
            <StickyCTA />
            <Footer />
        </>
    );
};

export default LandingPage;
