import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        category: "Hair Color",
        title: "Vibrant Balayage"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        category: "Styling",
        title: "Bridal Elegance"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        category: "Grooming",
        title: "Classic Fade"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        category: "Hair Color",
        title: "Platinum Blonde"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        category: "Styling",
        title: "Modern Bob"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        category: "Treatment",
        title: "Keratin Smoothing"
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
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '15px' }}>Our Work</h2>
                    <div style={{ width: '60px', height: '3px', background: 'var(--color-gold)', margin: '0 auto 20px' }}></div>
                    <p style={{ color: 'var(--color-text-gray)' }}>Browse our portfolio of transformations.</p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(250px, 40vw, 350px), 1fr))',
                    gap: '20px'
                }}>
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
                                alt={image.title}
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
                                top: '-40px',
                                right: '-40px',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer'
                            }}
                        >
                            <X size={30} />
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
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

