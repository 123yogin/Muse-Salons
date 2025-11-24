import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="cursor-dot"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--color-gold)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999
                }}
            />
            <motion.div
                className="cursor-ring"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? 'var(--color-gold)' : 'rgba(212, 175, 55, 0.3)',
                    backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.1)' : 'transparent'
                }}
                transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.8 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '40px',
                    height: '40px',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    mixBlendMode: 'screen'
                }}
            />
            <style>{`
                @media (max-width: 768px) {
                    .cursor-dot, .cursor-ring {
                        display: none !important;
                    }
                }
                body {
                    cursor: none;
                }
                a, button {
                    cursor: none;
                }
            `}</style>
        </>
    );
};

export default CustomCursor;

