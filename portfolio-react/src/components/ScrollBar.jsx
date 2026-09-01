import { useScroll, motion, useTransform } from "motion/react"

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#443842", "#f45832"]
  );

  return (
    <motion.div
      className="scrollbar_progress"

      style={{
        scaleX: scrollYProgress,
        background,
        x: "-50%",
        y: "-50%",
      }}
    />
  );
};

export default ScrollBar