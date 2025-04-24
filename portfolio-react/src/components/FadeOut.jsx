import { useScroll, useMotionValueEvent, useTransform, motion } from "motion/react";

const FadeOut = ({children}) => {
    const {scrollYProgress} = useScroll()

    const opacity = useTransform(scrollYProgress, [0.25, 0.45], [1, 0])

    return (
        <motion.div 
            style={{
                opacity
            }}
        >
            {children}
        </motion.div>
    )
}

export default FadeOut
