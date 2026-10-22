import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

const galleryImages = [
    {
        id: 1,
        src: "/gallery/facial.jpg",
        category: "Skin Care",
        title: "Glow Facial",
        alt: "AI-generated illustration of a woman receiving a glow facial treatment in a salon"
    },
    {
        id: 2,
        src: "/gallery/hairspa.jpg",
        category: "Hair Spa",
        title: "Hair Spa & Head Massage",
        alt: "AI-generated illustration of a hair spa and head massage treatment in a salon"
    },
    {
        id: 3,
        src: "/gallery/bridalmakeup.jpg",
        category: "Bridal",
        title: "Bridal Makeup",
        alt: "AI-generated illustration of bridal makeup being applied in a salon"
    },
    {
        id: 4,
        src: "/gallery/fade.jpg",
        category: "Men's Grooming",
        title: "Skin Fade Haircut",
        alt: "AI-generated illustration of a man getting a skin fade haircut in a salon"
    },
    {
        id: 5,
        src: "/gallery/shave.jpg",
        category: "Men's Grooming",
        title: "Classic Razor Shave",
        alt: "AI-generated illustration of a classic razor shave in a salon"
    },
    {
        id: 6,
        src: "/gallery/pedicure.jpg",
        category: "Beauty",
        title: "Rose Pedicure",
        alt: "AI-generated illustration of a rose pedicure treatment in a salon"
    }
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--color-black)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                    style={{ marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '15px' }}>Style Inspiration</h2>
                    <div style={{ width: '60px', height: '3px', background: 'var(--color-gold)', margin: '0 auto 20px' }}></div>
                    <p style={{ color: 'var(--color-text-gray)' }}>A glimpse of the services we offer at Muse.</p>
                    <p style={{ color: 'var(--color-text-gray)', fontSize: '0.8rem', opacity: 0.7, marginTop: '8px' }}>Images are AI-generated illustrations set in our salon, not photos of client work.</p>
                </motion.div>

                <div className="card-grid" style={{ gap: '20px' }}>
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, zIndex: 1 }}
                            onClick={() => setSelectedImage(image)}
                            style={{
                                position: 'relative',
                                height: '350px',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                borderRadius: '4px'
                            }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                width="1000"
                                height="1000"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(0,0,0,0.6)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'white'
                                }}
                            >
                                <h4 style={{ color: 'var(--color-gold)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', marginBottom: '5px' }}>{image.title}</h4>
                                <p style={{ fontSize: 'clamp(0.8rem, 1vw, 0.9rem)', textTransform: 'uppercase', letterSpacing: '1px' }}>{image.category}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImage(null)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.9)',
                        zIndex: 1000,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '40px'
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                zIndex: 1,
                                background: 'rgba(0, 0, 0, 0.6)',
                                border: 'none',
                                borderRadius: '50%',
                                padding: '6px',
                                display: 'flex',
                                color: 'white',
                                cursor: 'pointer'
                            }}
                        >
                            <X size={30} />
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            style={{ maxHeight: '85vh', maxWidth: '100%', borderRadius: '4px', boxShadow: '0 0 30px rgba(0,0,0,0.5)' }}
                        />
                        <div style={{ textAlign: 'center', marginTop: '15px' }}>
                            <h3 style={{ color: 'var(--color-gold)', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}>{selectedImage.title}</h3>
                            <p style={{ color: 'var(--color-text-gray)' }}>{selectedImage.category}</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default Gallery;

