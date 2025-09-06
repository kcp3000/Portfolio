import { useScroll, useTransform, motion } from "motion/react";

const FadeIn = ({ children, y, y2 }) => {
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [y, y2], [0, 1])

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

export default FadeIn
