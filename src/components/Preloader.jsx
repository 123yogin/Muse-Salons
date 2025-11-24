import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.8, delay: 2.5, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--color-black)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10000
            }}
        >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <motion.h1
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    style={{
                        fontSize: '4rem',
                        color: 'var(--color-gold)',
                        letterSpacing: '5px',
                        fontFamily: 'var(--font-heading)',
                        margin: 0
                    }}
                >
                    MUSE
                </motion.h1>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                    style={{
                        width: '100%',
                        height: '2px',
                        background: 'var(--color-white)',
                        marginTop: '10px',
                        transformOrigin: 'left'
                    }}
                />
                 <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    style={{
                        textAlign: 'center',
                        color: 'var(--color-text-gray)',
                        marginTop: '10px',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '3px'
                    }}
                 >
                    Unisex Salon
                 </motion.p>
            </div>
        </motion.div>
    );
};

export default Preloader;

