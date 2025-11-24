import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/MUSE unisex salon logo.png';

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer style={{ backgroundColor: 'var(--color-black)', padding: '50px 0', borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
            <motion.div
                className="container text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div variants={itemVariants} style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
                    <img src={logo} alt="MUSE Unisex Salon" style={{ height: '150px', width: 'auto' }} />
                </motion.div>

                <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                    {[Facebook, Instagram, Twitter].map((Icon, index) => (
                        <motion.a
                            key={index}
                            href="#"
                            style={{ color: 'var(--color-gold)' }}
                            whileHover={{ scale: 1.2, color: '#fff' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Icon />
                        </motion.a>
                    ))}
                </motion.div>

                <motion.p variants={itemVariants} style={{ color: 'var(--color-text-gray)', fontSize: '0.8rem' }}>
                    &copy; {new Date().getFullYear()} Muse Unisex Salon. All rights reserved.
                </motion.p>
            </motion.div>
        </footer>
    );
};

export default Footer;
