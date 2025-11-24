import { motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';

const StickyCTA = () => {
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
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
                    fontSize: '0.9rem'
                }}
            >
                <CalendarCheck size={20} />
                Book Now
            </a>
            <style>{`
                @media (min-width: 769px) {
                    .sticky-cta { display: none !important; }
                }
            `}</style>
        </motion.div>
    );
};

export default StickyCTA;

