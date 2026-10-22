import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '916355255733';

const serviceOptions = [
    'Haircut & Styling',
    'Hair Spa / Head Massage',
    'Hair Coloring',
    'Keratin / Straightening / Botox',
    'Facial',
    'Beard Trim / Shave',
    'Manicure / Pedicure',
    'Waxing',
    'Bridal Package',
    'Groom Package',
    'Other'
];

const fieldStyle = {
    width: '100%',
    padding: '12px',
    background: 'var(--color-dark-gray)',
    border: '1px solid transparent',
    color: 'white',
    outline: 'none',
    borderRadius: '4px',
    fontFamily: 'inherit',
    fontSize: '1rem',
    colorScheme: 'dark'
};

const Contact = () => {
    const inputVariants = {
        focus: { borderColor: "var(--color-gold)", transition: { duration: 0.3 } }
    };
    const [form, setForm] = useState({ name: '', service: '', date: '', time: '', message: '' });
    const today = new Date().toISOString().split('T')[0];

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date(form.date + 'T00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
        const lines = [
            'Hello MUSE Unisex Salon! I would like to book an appointment.',
            '',
            `Name: ${form.name}`,
            `Service: ${form.service}`,
            `Date: ${date}`,
            `Time: ${form.time ? new Date(`2000-01-01T${form.time}`).toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true }).toUpperCase() : 'Any time'}`
        ];
        if (form.message.trim()) lines.push(`Note: ${form.message.trim()}`);
        lines.push('', 'Please confirm my slot. Thank you!');
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
        window.open(url, '_blank', 'noopener');
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
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '15px' }}>Visit Us</h2>
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
                            <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', marginBottom: '20px', color: 'var(--color-white)' }}>Get in Touch</h3>
                            <p style={{ color: 'var(--color-text-gray)', marginBottom: '20px' }}>
                                Ready for your transformation? Book an appointment or visit us today.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            {[
                                { icon: <MapPin />, text: "D-93, Pamurkh Mastana Complex, Kudasan, Gandhinagar" },
                                { icon: <Phone />, text: "+91 63552 55733", href: "tel:+916355255733" },
                                { icon: <Mail />, text: "parekhdarshan19@gmail.com", href: "mailto:parekhdarshan19@gmail.com" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
                                >
                                    <div style={{ color: 'var(--color-gold)' }}>{item.icon}</div>
                                    <p style={{ color: 'var(--color-text-gray)' }}>
                                        {item.href ? <a href={item.href} style={{ color: 'inherit', textDecoration: 'none' }}>{item.text}</a> : item.text}
                                    </p>
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
                        <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', marginBottom: '8px', color: 'var(--color-white)' }}>Book an Appointment</h3>
                        <p style={{ color: 'var(--color-text-gray)', fontSize: '0.9rem', marginBottom: '20px' }}>Fill this in and we'll open WhatsApp with your request ready to send.</p>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '15px' }}>
                                <motion.input
                                    whileFocus="focus"
                                    variants={inputVariants}
                                    type="text"
                                    name="name"
                                    aria-label="Your name"
                                    placeholder="Your Name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    style={fieldStyle}
                                />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <motion.select
                                    whileFocus="focus"
                                    variants={inputVariants}
                                    name="service"
                                    aria-label="Service"
                                    required
                                    value={form.service}
                                    onChange={handleChange}
                                    style={{ ...fieldStyle, color: form.service ? 'white' : 'var(--color-text-gray)' }}
                                >
                                    <option value="" disabled>Select a Service</option>
                                    {serviceOptions.map((option) => (
                                        <option key={option} value={option} style={{ color: 'white' }}>{option}</option>
                                    ))}
                                </motion.select>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '15px' }}>
                                <label style={{ flex: '1 1 140px', color: 'var(--color-text-gray)', fontSize: '0.8rem' }}>
                                    Date
                                    <motion.input
                                        whileFocus="focus"
                                        variants={inputVariants}
                                        type="date"
                                        name="date"
                                        required
                                        min={today}
                                        value={form.date}
                                        onChange={handleChange}
                                        style={{ ...fieldStyle, marginTop: '5px' }}
                                    />
                                </label>
                                <label style={{ flex: '1 1 140px', color: 'var(--color-text-gray)', fontSize: '0.8rem' }}>
                                    Time (10 AM - 10 PM)
                                    <motion.input
                                        whileFocus="focus"
                                        variants={inputVariants}
                                        type="time"
                                        name="time"
                                        min="10:00"
                                        max="21:30"
                                        value={form.time}
                                        onChange={handleChange}
                                        style={{ ...fieldStyle, marginTop: '5px' }}
                                    />
                                </label>
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <motion.textarea
                                    whileFocus="focus"
                                    variants={inputVariants}
                                    name="message"
                                    aria-label="Note (optional)"
                                    placeholder="Note (optional)"
                                    rows="3"
                                    value={form.message}
                                    onChange={handleChange}
                                    style={{ ...fieldStyle, resize: 'none' }}
                                ></motion.textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="btn"
                                style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book on WhatsApp <Send size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
