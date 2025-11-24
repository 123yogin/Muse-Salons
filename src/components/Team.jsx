import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const teamMembers = [
    {
        id: 1,
        name: "Elena Rossi",
        role: "Master Stylist",
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        bio: "With over 10 years of experience in Milan and New York, Elena specializes in precision cuts and high-fashion styling."
    },
    {
        id: 2,
        name: "David Chen",
        role: "Color Specialist",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        bio: "David is a master of balayage and color correction, known for creating natural, sun-kissed looks that last."
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "Senior Esthetician",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        bio: "Sarah's holistic approach to skincare combines advanced treatments with relaxation techniques for glowing results."
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

