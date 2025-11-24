import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const teamMembers = [
    {
        id: 1,
        name: "Darshan Nai",
        role: "Master Hair Stylist",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
                    <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Meet the Artists</h2>
                    <div style={{ width: '60px', height: '3px', background: 'var(--color-gold)', margin: '0 auto 20px' }}></div>
                    <p style={{ color: 'var(--color-text-gray)' }}>The talented hands behind your transformation.</p>
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '30px'
                }}>
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                flex: '1 1 300px',
                                maxWidth: '350px',
                                position: 'relative',
                                group: 'team-card'
                            }}
                        >
                            <div style={{ overflow: 'hidden', borderRadius: '4px', marginBottom: '20px', position: 'relative' }}>
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    src={member.image}
                                    alt={member.name}
                                    style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
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
                            <div className="text-center">
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-white)', marginBottom: '5px' }}>{member.name}</h3>
                                <p style={{ color: 'var(--color-gold)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '10px' }}>{member.role}</p>
                                <p style={{ color: 'var(--color-text-gray)', fontSize: '0.95rem' }}>{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

