import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 1, ease: "easeOut" }
        }
    };

    // Generate random particles
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5
    }));

    return (
        <section id="hero" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Parallax Background */}
            <motion.div 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '120%', // Taller for parallax
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    y: y1
                }}
            />

            {/* Floating Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0]
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        background: 'var(--color-gold)',
                        borderRadius: '50%',
                        zIndex: 1,
                        pointerEvents: 'none',
                        boxShadow: '0 0 10px var(--color-gold)'
                    }}
                />
            ))}

            <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
                <motion.h2
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    style={{
                        color: 'var(--color-gold)',
                        fontSize: '1.5rem',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}
                >
                    Welcome to Muse
                </motion.h2>

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        lineHeight: 1.1,
                        marginBottom: '30px',
                        color: 'var(--color-white)'
                    }}
                >
                    Experience <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{ color: 'var(--color-gold)', fontStyle: 'italic', display: 'inline-block' }}
                    >Luxury</motion.span> <br />
                    Redefined
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ delay: 0.4 }}
                    style={{
                        fontSize: '1.2rem',
                        maxWidth: '600px',
                        margin: '0 auto 40px',
                        color: 'var(--color-text-gray)'
                    }}
                >
                    Where style meets sophistication. Discover your perfect look with our expert stylists in a premium atmosphere.
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a href="#services" className="btn">Book an Appointment</a>
                </motion.div>
            </div>

            {/* Decorative Elements - Animated Circles */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '500px',
                    height: '500px',
                    border: '1px solid rgba(212, 175, 55, 0.1)',
                    borderRadius: '50%',
                    zIndex: 1,
                    y: y2
                }}
            />
            
             <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: '300px',
                    height: '300px',
                    border: '1px solid rgba(212, 175, 55, 0.05)',
                    borderRadius: '50%',
                    zIndex: 1,
                     y: y2
                }}
            />

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ 
                    opacity: { delay: 1, duration: 1 },
                    y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    translateX: '-50%',
                    zIndex: 10,
                    color: 'var(--color-white)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>Scroll</span>
                <ChevronDown size={24} color="var(--color-gold)" />
            </motion.div>
        </section>
    );
};

export default Hero;
