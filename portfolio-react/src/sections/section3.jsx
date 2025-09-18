import { motion, MotionConfig } from "motion/react"
import { SlideAnimate } from "../components/SlideAnimate"
import { Link } from "react-router-dom"

export function Section3() {
  return (
    <div className="section3_container">
      <section className="grid_container3">
        <SlideAnimate delay={0.25}>
          <h1>PROJECTS</h1>
        </SlideAnimate>
        <SlideAnimate delay={0.5}>
          <Link to="/Y2K" className="link">
            <motion.p className="block"
              whileHover={{ scale: 1.05 }}
            ></motion.p>
          </Link>
        </SlideAnimate>

        <SlideAnimate delay={0.7}>
          <MotionConfig
            transition={{
              duration: "0.25",
              ease: "easeInOut"
            }}
          >
            <Link to="/WasteWise" className="link">
              <motion.p className="block"
                whileHover={{ scale: 1.05 }}
              ></motion.p>
            </Link>
          </MotionConfig>

        </SlideAnimate>
        <SlideAnimate delay={0.9}>
          <Link to="/CAW" className="link">
            <motion.p className="block"
              whileHover={{ scale: 1.05 }}
            ></motion.p>
          </Link>
        </SlideAnimate>
        <SlideAnimate delay={0.6}>
          <h1 className="y2k">Y2K</h1>
        </SlideAnimate>
        <SlideAnimate delay={0.8}>
          <h1>WASTE</h1>
        </SlideAnimate>
        <SlideAnimate delay={[1]}>
          <h1>CAW</h1>
        </SlideAnimate>

      </section>
    </div>
  )
}

export default Section3