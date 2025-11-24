import { motion } from 'framer-motion';
import { Palette, Scissors, Sparkles, Zap } from 'lucide-react';

const services = [
    {
        icon: <Scissors size={40} />,
        title: "Hair Styling",
        description: "Expert cuts and styling tailored to your unique face shape and personality."
    },
    {
        icon: <Palette size={40} />,
        title: "Coloring",
        description: "Premium coloring services using top-tier products for vibrant, lasting results."
    },
    {
        icon: <Sparkles size={40} />,
        title: "Facials & Skincare",
        description: "Rejuvenating treatments to restore your skin's natural glow."
    },
    {
        icon: <Zap size={40} />,
        title: "Grooming",
        description: "Complete grooming packages for the modern gentleman."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, type: "spring", bounce: 0.4 }
    }
};

const Services = () => {
    return (
        <section id="services" className="section-padding" style={{ backgroundColor: 'var(--color-black)', position: 'relative', overflow: 'hidden' }}>
            
            {/* Floating Background Shapes */}
            <motion.div
                animate={{ 
                    y: [0, -20, 0], 
                    rotate: [0, 5, 0],
                    opacity: [0.3, 0.6, 0.3] 
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '-5%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0) 70%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />
             <motion.div
                animate={{ 
                    y: [0, 30, 0], 
                    x: [0, 20, 0],
                    opacity: [0.2, 0.5, 0.2] 
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '-5%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(0,0,0,0) 70%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                    style={{ marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Our Services</h2>
                    <div style={{ width: '60px', height: '3px', background: 'var(--color-gold)', margin: '0 auto' }}></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '30px'
                    }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -15, 
                                scale: 1.03,
                                boxShadow: "0 20px 30px -10px rgba(0,0,0,0.5)"
                            }}
                            style={{
                                background: 'var(--color-dark-gray)',
                                padding: '40px 30px',
                                borderRadius: '8px',
                                textAlign: 'center',
                                border: '1px solid transparent',
                                transition: 'border-color 0.3s',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            className="service-card"
                        >
                            <motion.div 
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.6 }}
                                style={{ color: 'var(--color-gold)', marginBottom: '20px', display: 'inline-block' }}
                            >
                                {service.icon}
                            </motion.div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-white)' }}>{service.title}</h3>
                            <p style={{ color: 'var(--color-text-gray)' }}>{service.description}</p>
                            
                            {/* Hover Glow Effect */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'radial-gradient(circle at center, rgba(212,175,55,0.1) 0%, transparent 70%)',
                                    opacity: 0
                                }}
                                whileHover={{ opacity: 1 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <style>{`
            .service-card:hover {
                border-color: var(--color-gold);
            }
        `}</style>
            </div>
        </section>
    );
};

export default Services;
