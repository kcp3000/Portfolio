import { motion, MotionConfig } from "motion/react"
import { SlideAnimateX } from "../components/SlideAnimateX"
import { Link } from "react-router-dom"

export function Section3() {
  return (
    <div className="section3_container">
      <section className="grid_container3">
        <SlideAnimateX delay={0.25} xH={-50}>
          <h1 className="Pro">PROJECTS</h1>
        </SlideAnimateX>
        <SlideAnimateX delay={0.5} xH={-50}>
          <Link to="/Y2K" className="link">
            <motion.p className="block"
              whileHover={{ scale: 1.05 }}
            ></motion.p>
          </Link>
        </SlideAnimateX>

        <SlideAnimateX delay={0.7} xH={-50}>
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

        </SlideAnimateX>
        <SlideAnimateX delay={0.9} xH={-50}>
          <Link to="/CAW" className="link">
            <motion.p className="block"
              whileHover={{ scale: 1.05 }}
            ></motion.p>
          </Link>
        </SlideAnimateX>
        <SlideAnimateX delay={0.6} xH={-50}>
          <h1 className="y2k">Y2K</h1>
        </SlideAnimateX>
        <SlideAnimateX delay={0.8} xH={-50}>
          <h1>WASTE</h1>
        </SlideAnimateX>
        <SlideAnimateX delay={[1]} xH={-50}>
          <h1>CAW</h1>
        </SlideAnimateX>
        <SlideAnimateX delay={1.5} xH={-50}>
          <Link className="Project_link" to="/PROJECTS">click here to checkout the rest</Link>
        </SlideAnimateX>
      </section>
    </div>
  )
}

export default Section3