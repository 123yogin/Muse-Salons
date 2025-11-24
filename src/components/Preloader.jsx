import { motion } from 'framer-motion';
import logo from '../assets/MUSE unisex salon logo.png';

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
            <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <motion.img
                    src={logo}
                    alt="MUSE Unisex Salon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{
                        width: '300px',
                        height: 'auto',
                        maxWidth: '80vw'
                    }}
                />
            </div>
        </motion.div>
    );
};

export default Preloader;

