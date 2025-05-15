import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { Grid } from "lucide-react";

export function SlideAnimate ({children, delay}) {
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
            style={{
                display: Grid
            }}
            ref={ref}
            variants={{
                hidden: {opacity: 0, x: -50},
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