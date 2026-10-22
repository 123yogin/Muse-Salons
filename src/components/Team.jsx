import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const teamMembers = [
    {
        id: 1,
        name: "Darshan Nai",
        role: "Master Hair Stylist",
        image: "/darshan.jpg",
        bio: "A master craftsman with 8+ years of expertise, Darshan has transformed over 300,000 clients. Trained at prestigious salons in Mehsana and Ahmedabad, he brings precision, creativity, and passion to every style.",
        experience: "8+ years",
        clients: "300,000+",
        background: [
            "2 years at Vaibhav Salon, Mehsana",
            "6 years at Bonz Salon & Latest Academy, Ahmedabad"
        ]
    }
];

const Team = () => {
    return (
        <section id="team" className="section-padding" style={{ backgroundColor: 'var(--color-dark-gray)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                    style={{ marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '15px' }}>Meet the Artists</h2>
                    <div style={{ width: '60px', height: '3px', background: 'var(--color-gold)', margin: '0 auto 20px' }}></div>
                    <p style={{ color: 'var(--color-text-gray)' }}>The talented hands behind your transformation.</p>
                </motion.div>

                {teamMembers.map((member, index) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                            gap: '48px',
                            alignItems: 'center',
                            maxWidth: '900px',
                            margin: '0 auto'
                        }}
                    >
                        <div style={{ overflow: 'hidden', borderRadius: '4px', position: 'relative', maxWidth: '420px', width: '100%', justifySelf: 'center' }}>
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                src={member.image}
                                alt={`${member.name}, ${member.role} at MUSE Unisex Salon`}
                                loading="lazy"
                                width="1086"
                                height="1448"
                                style={{ width: '100%', aspectRatio: '3 / 4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                            />
                            {/* Social Overlay */}
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '20px',
                                background: 'var(--color-gold)',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}>
                                <Instagram size={20} color="black" />
                            </div>
                        </div>
                        <div>
                            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--color-white)', marginBottom: '5px' }}>{member.name}</h3>
                            <p style={{ color: 'var(--color-gold)', textTransform: 'uppercase', fontSize: 'clamp(0.8rem, 1vw, 0.9rem)', letterSpacing: '1px', marginBottom: '20px' }}>{member.role}</p>
                            <p style={{ color: 'var(--color-text-gray)', fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)', marginBottom: '30px' }}>{member.bio}</p>
                            <div style={{ display: 'flex', gap: '40px', marginBottom: '30px' }}>
                                {[['Experience', member.experience], ['Clients', member.clients]].map(([label, value]) => (
                                    <div key={label}>
                                        <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-gold)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.2 }}>{value}</p>
                                        <p style={{ color: 'var(--color-text-gray)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{label}</p>
                                    </div>
                                ))}
                            </div>
                            <ul style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '20px' }}>
                                {member.background.map((item) => (
                                    <li key={item} style={{ color: 'var(--color-text-gray)', fontSize: '0.95rem', marginBottom: '8px' }}>
                                        <span style={{ color: 'var(--color-gold)', marginRight: '10px' }}>—</span>{item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Team;

