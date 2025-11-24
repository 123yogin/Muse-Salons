import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    const inputVariants = {
        focus: { scale: 1.02, borderColor: "var(--color-gold)", transition: { duration: 0.3 } }
    };

    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--color-dark-gray)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                    style={{ marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Visit Us</h2>
                    <div style={{ width: '60px', height: '3px', background: 'var(--color-gold)', margin: '0 auto' }}></div>
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '40px',
                    justifyContent: 'center'
                }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ flex: '1 1 300px', maxWidth: '500px' }}
                    >
                        <div style={{ marginBottom: '30px' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--color-white)' }}>Get in Touch</h3>
                            <p style={{ color: 'var(--color-text-gray)', marginBottom: '20px' }}>
                                Ready for your transformation? Book an appointment or visit us today.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            {[
                                { icon: <MapPin />, text: "D-93, Pamurkh Mastana Complex, Kudasan, Gandhinagar" },
                                { icon: <Phone />, text: "+91 63552 55733" },
                                { icon: <Mail />, text: "parekhdarshan19@gmail.com" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
                                >
                                    <div style={{ color: 'var(--color-gold)' }}>{item.icon}</div>
                                    <p style={{ color: 'var(--color-text-gray)' }}>{item.text}</p>
                                </motion.div>
                            ))}

                            <motion.div
                                whileHover={{ x: 10 }}
                                style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}
                            >
                                <div style={{ color: 'var(--color-gold)' }}><Clock /></div>
                                <div>
                                    <p style={{ color: 'var(--color-text-gray)' }}>Mon - Sat: 10:00 AM - 10:00 PM</p>
                                    <p style={{ color: 'var(--color-text-gray)' }}>Sun: 10:00 AM - 10:00 PM</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            flex: '1 1 300px',
                            maxWidth: '500px',
                            background: 'var(--color-black)',
                            padding: '30px',
                            borderRadius: '8px',
                            border: '1px solid rgba(212, 175, 55, 0.1)'
                        }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--color-white)' }}>Send a Message</h3>
                        <form>
                            <div style={{ marginBottom: '15px' }}>
                                <motion.input
                                    whileFocus="focus"
                                    variants={inputVariants}
                                    type="text"
                                    placeholder="Your Name"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        background: 'var(--color-dark-gray)',
                                        border: '1px solid transparent',
                                        color: 'white',
                                        outline: 'none',
                                        borderRadius: '4px'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <motion.input
                                    whileFocus="focus"
                                    variants={inputVariants}
                                    type="email"
                                    placeholder="Your Email"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        background: 'var(--color-dark-gray)',
                                        border: '1px solid transparent',
                                        color: 'white',
                                        outline: 'none',
                                        borderRadius: '4px'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <motion.textarea
                                    whileFocus="focus"
                                    variants={inputVariants}
                                    placeholder="Message"
                                    rows="4"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        background: 'var(--color-dark-gray)',
                                        border: '1px solid transparent',
                                        color: 'white',
                                        outline: 'none',
                                        resize: 'none',
                                        borderRadius: '4px'
                                    }}
                                ></motion.textarea>
                            </div>
                            <motion.button
                                type="button"
                                className="btn"
                                style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message <Send size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
