import { useScroll, useTransform, motion } from "motion/react";

const FadeOut = ({ children, y, y2 }) => {
    const { scrollYProgress } = useScroll()

    const opacity = useTransform(scrollYProgress, [y, y2], [1, 0])

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
