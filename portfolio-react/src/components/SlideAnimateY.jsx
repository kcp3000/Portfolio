import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "motion/react";

function SlideAnimateY ({children, delay, yH}) {
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
                hidden: {opacity: 0, y: yH},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: delay}}
        >
            {children}
        </motion.div>
    )
}

export default SlideAnimateY
//yH was -50 and yV was 0