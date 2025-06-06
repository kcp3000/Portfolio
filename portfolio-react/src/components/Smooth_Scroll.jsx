import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const SmoothScroll = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    //getting height info
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current != null) {
                setContentHeight(contentRef.current.scrollHeight)
            };
            setWindowHeight(window.innerHeight);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [contentRef]);

    //intercept normal scroll behavior
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,
        stiffness: 100,
        damping: 30,
        restDeltaL: 0.01,
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (scrollYProgress.get() === 0) {
                setIsLoading(false)
            }
        }, 50)

        return () => clearTimeout(timeout)

    }, [scrollYProgress])

    useMotionValueEvent(smoothProgress, 'change', (latest) => {
        if (latest === 0) {
            setIsLoading(false);
        };
    });

    const y = useTransform(smoothProgress, (value) => {
        return value * -(contentHeight - windowHeight);
    })

    return (
        <>
            <div style={{ height: contentHeight }} />
            <motion.div className="scrolling" ref={contentRef} style={{ y: isLoading ? 0 : y, opacity: isLoading ? 0 : 1 }}>
                {children}
            </motion.div>
        </>
    )
}

export default SmoothScroll