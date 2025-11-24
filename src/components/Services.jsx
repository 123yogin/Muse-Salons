import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Crown, Heart, Sparkles, Star } from 'lucide-react';
import { useState } from 'react';

const servicesData = {
    male: {
        title: "Male Services",
        categories: [
            {
                name: "General",
                items: [
                    "Haircut",
                    "Hairstyling",
                    "Shaving",
                    "Beard Trim and Shape",
                    "Hair Spa",
                    "Head Massage",
                    "Facial",
                    "Hair Coloring"
                ]
            },
            {
                name: "Hair Treatments",
                items: [
                    "Straightening",
                    "Keratin",
                    "Botox / Nanoplastia",
                    "Hydrating Hair Treatment",
                    "Hair Highlighting"
                ]
            },
            {
                name: "Grooming",
                items: ["Eyebrow Grooming"]
            }
        ]
    },
    female: {
        title: "Female Services",
        categories: [
            {
                name: "Hair Care",
                items: ["Haircut", "Hair Wash", "Blow Dry", "Deep Conditioning", "Hair Spa"]
            },
            {
                name: "Treatment-Based Hair Spa",
                items: ["Keratin", "Straightening", "Botox"]
            },
            {
                name: "Styling",
                items: ["Curls", "Straight Look", "Beach Waves"]
            },
            {
                name: "Coloring",
                items: ["Balayage", "Babylights", "Global Color", "Root Touch-Up", "Highlights"]
            },
            {
                name: "Extensions",
                items: ["Hair Extensions (All Types)"]
            },
            {
                name: "Beauty & Grooming",
                items: ["Pedicure", "Manicure", "Waxing"]
            }
        ]
    }
};

const weddingPackages = {
    bridal: [
        {
            name: "The Classic Bride",
            description: "Essential pre-wedding glow for the elegant bride.",
            features: ["Classic Facial", "Hair Spa", "Manicure & Pedicure", "Threading & Waxing"]
        },
        {
            name: "The Radiant Bride",
            description: "Enhanced care for a stunning, camera-ready look.",
            features: ["Premium Facial", "Body Polishing", "Keratin Treatment", "Deluxe Mani-Pedi"]
        },
        {
            name: "The Muse Royal Bride",
            description: "The ultimate luxury experience for your special day.",
            features: ["Signature Gold Facial", "Full Body Spa", "Advanced Hair Treatment", "Royal Mani-Pedi", "Makeup Trial"]
        }
    ],
    groom: [
        {
            name: "The Classic Groom",
            description: "Essential grooming for a sharp, clean look.",
            features: ["Haircut & Styling", "Beard Grooming", "Face Clean-up", "Manicure"]
        },
        {
            name: "The Dapper Groom",
            description: "Refined styling and relaxation for the modern groom.",
            features: ["Premium Haircut", "Beard Spa", "Brightening Facial", "Pedicure"]
        },
        {
            name: "The Muse Royal Groom",
            description: "Complete luxury grooming for the king of the day.",
            features: ["Royal Haircut & Spa", "Luxury Beard Treatment", "Gold Facial", "Full Body Massage", "Deluxe Mani-Pedi"]
        }
    ]
};

const Services = () => {
    const [activeTab, setActiveTab] = useState('female');

    return (
        <section id="services" className="section-padding" style={{ backgroundColor: 'var(--color-black)', minHeight: '100vh', position: 'relative' }}>
            {/* Background Texture */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Main Services Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                    style={{ marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '15px', color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}>Our Services</h2>
                    <p style={{ color: 'var(--color-text-gray)', fontSize: '1.1rem', letterSpacing: '1px' }}>Experience world-class grooming and styling.</p>
                </motion.div>

                {/* Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '50px' }}>
                    {['male', 'female'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                padding: '15px 40px',
                                fontSize: '1.2rem',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                background: activeTab === tab ? 'var(--color-gold)' : 'rgba(255,255,255,0.05)',
                                color: activeTab === tab ? 'var(--color-black)' : 'var(--color-gold)',
                                border: '1px solid var(--color-gold)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontWeight: 'bold',
                                backdropFilter: 'blur(5px)'
                            }}
                        >
                            {tab === 'male' ? 'For Him' : 'For Her'}
                        </button>
                    ))}
                </div>

                {/* Service Categories */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '30px'
                        }}>
                            {servicesData[activeTab].categories.map((category, index) => (
                                <motion.div
                                    key={category.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(212, 175, 55, 0.15)' }}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(10px)',
                                        padding: '40px',
                                        border: '1px solid rgba(212, 175, 55, 0.1)',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <h3 style={{
                                        color: 'var(--color-gold)',
                                        fontSize: '1.8rem',
                                        marginBottom: '25px',
                                        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
                                        paddingBottom: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        fontFamily: 'var(--font-heading)'
                                    }}>
                                        <Sparkles size={24} />
                                        {category.name}
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0, flex: 1 }}>
                                        {category.items.map((item, i) => (
                                            <li key={i} style={{
                                                marginBottom: '15px',
                                                color: 'var(--color-white)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                fontSize: '1.1rem'
                                            }}>
                                                <ChevronRight size={18} color="var(--color-gold)" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Wedding Collection Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ marginTop: '120px' }}
                >
                    <div className="text-center" style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '15px', color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}>The Wedding Collection</h2>
                        <p style={{ color: 'var(--color-text-gray)', fontSize: '1.1rem' }}>Curated luxury packages for your special day.</p>
                    </div>

                    {/* Bridal Packages */}
                    <h3 style={{ color: 'var(--color-white)', fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px', fontFamily: 'var(--font-heading)' }}>Bridal Packages</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '80px' }}>
                        {weddingPackages.bridal.map((pkg, index) => (
                            <WeddingCard key={index} pkg={pkg} icon={<Crown size={30} />} />
                        ))}
                    </div>

                    {/* Groom Packages */}
                    <h3 style={{ color: 'var(--color-white)', fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px', fontFamily: 'var(--font-heading)' }}>Groom Packages</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                        {weddingPackages.groom.map((pkg, index) => (
                            <WeddingCard key={index} pkg={pkg} icon={<Star size={30} />} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const WeddingCard = ({ pkg, icon }) => (
    <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        style={{
            background: 'linear-gradient(145deg, rgba(20,20,20,1) 0%, rgba(30,30,30,1) 100%)',
            padding: '40px 30px',
            borderRadius: '12px',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}
    >
        <div style={{
            color: 'var(--color-gold)',
            marginBottom: '20px',
            background: 'rgba(212, 175, 55, 0.1)',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px'
        }}>
            {icon}
        </div>
        <h4 style={{ fontSize: '1.8rem', color: 'var(--color-gold)', marginBottom: '15px', fontFamily: 'var(--font-heading)' }}>{pkg.name}</h4>
        <p style={{ color: 'var(--color-text-gray)', marginBottom: '25px', fontStyle: 'italic', minHeight: '50px' }}>{pkg.description}</p>
        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', flex: 1, marginBottom: '25px' }}>
            {pkg.features.map((feature, i) => (
                <li key={i} style={{
                    marginBottom: '12px',
                    color: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '1.05rem',
                    borderBottom: '1px dashed rgba(255,255,255,0.1)',
                    paddingBottom: '10px'
                }}>
                    <Heart size={14} color="var(--color-gold)" fill="var(--color-gold)" />
                    {feature}
                </li>
            ))}
        </ul>
        <button style={{
            width: '100%',
            padding: '15px 25px',
            background: 'transparent',
            border: '1px solid var(--color-gold)',
            color: 'var(--color-gold)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: 'bold',
            marginTop: 'auto'
        }}
            onMouseEnter={(e) => { e.target.style.background = 'var(--color-gold)'; e.target.style.color = 'var(--color-black)'; }}
            onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--color-gold)'; }}
        >
            Book Now
        </button>
    </motion.div>
);

export default Services;
