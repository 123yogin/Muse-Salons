import { motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

const StickyCTA = () => {
    // Hide while the booking form is on screen so it doesn't cover the submit button
    const [contactVisible, setContactVisible] = useState(false);

    useEffect(() => {
        const contact = document.getElementById('contact');
        if (!contact) return;
        const observer = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting), { threshold: 0.1 });
        observer.observe(contact);
        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: contactVisible ? 120 : 0 }}
            transition={{ delay: contactVisible ? 0 : 1, duration: 0.4 }}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 99,
                display: 'flex', // Usually hidden on desktop, but good for demo
            }}
            className="sticky-cta"
        >
            <a
                href="#contact"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-black)',
                    padding: '15px 25px',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: 'clamp(0.8rem, 1vw, 0.9rem)'
                }}
            >
                <CalendarCheck size={20} />
                Book Now
            </a>
            <style>{`
                @media (min-width: 768px) {
                    .sticky-cta { display: none !important; }
                }
            `}</style>
        </motion.div>
    );
};

export default StickyCTA;

