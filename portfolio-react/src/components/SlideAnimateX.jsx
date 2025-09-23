import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "motion/react";

export function SlideAnimateX ({children, delay, xH}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: {opacity: 0, x: xH},
                visible: {opacity: 1, x: 0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: delay}}
        >
            {children}
        </motion.div>
    )
}

//xH was -50 and xV was 0