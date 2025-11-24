import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Counter = ({ value, label }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const springValue = useSpring(0, { duration: 2000 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            springValue.set(value);
        }
    }, [inView, value, springValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <div ref={ref}>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-gold)' }}>
                {displayValue}{value === 5 ? '+' : (value === 1000 ? '+' : '+')}
            </h3>
            <p style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>{label}</p>
        </div>
    );
};

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section id="about" className="section-padding" style={{ backgroundColor: 'var(--color-black)', position: 'relative', overflow: 'hidden' }}>
            <div className="container" ref={ref}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '60px',
                    flexWrap: 'wrap'
                }}>
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ flex: '1 1 400px', position: 'relative' }}
                    >
                        <motion.div style={{ y }}>
                            <div style={{ position: 'relative' }}>
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    style={{
                                        position: 'absolute',
                                        top: '-20px',
                                        left: '-20px',
                                        width: '100%',
                                        height: '100%',
                                        border: '2px solid var(--color-gold)',
                                        zIndex: 0
                                    }}
                                ></motion.div>
                                <img
                                    src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Salon Interior"
                                    style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1, display: 'block' }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ flex: '1 1 400px' }}
                    >
                        <h2 style={{ fontSize: '3rem', marginBottom: '25px' }}>About <span className="gold-text">Muse</span></h2>
                        <p style={{ color: 'var(--color-text-gray)', marginBottom: '20px', fontSize: '1.1rem' }}>
                            Founded on the belief that everyone deserves to look and feel their absolute best, Muse Unisex Salon is more than just a place to get a haircut. It's a sanctuary of style, luxury, and relaxation.
                        </p>
                        <p style={{ color: 'var(--color-text-gray)', marginBottom: '30px', fontSize: '1.1rem' }}>
                            Our team of expert stylists and therapists are dedicated to providing personalized care, using only the finest products to ensure you leave feeling rejuvenated and confident.
                        </p>

                        <div style={{ display: 'flex', gap: '40px' }}>
                            <Counter value={5} label="Years Experience" />
                            <Counter value={1000} label="Happy Clients" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
