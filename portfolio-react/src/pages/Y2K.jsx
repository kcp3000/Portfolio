//https://kcp3000.github.io/Y2K/
import y2k1 from "../images/y2k/y2k1.png"
import y2k2 from "../images/y2k/y2k2.png"
import y2k3 from "../images/y2k/y2k3.png"
import y2k4 from "../images/y2k/y2k4.png"
import AppearText from "../components/AppearText"
import { motion } from "motion/react"
import jester from "../images/y2k/stanczyk_jester.png"
import { Link } from "react-router-dom"
import SlideAnimateY from "../components/SlideAnimateY"
import { SlideAnimateX } from "../components/SlideAnimateX"

const Y2K = () => {
  return <>
    <main>
      <section className="y2k-main">
        <SlideAnimateX delay={1} xH={-50}>
          <h1 className="y2kTitle">Y2K</h1>
        </SlideAnimateX>
        <SlideAnimateX delay={1.5} xH={-50}>
           <a href="https://kcp3000.github.io/Y2K/" className="Project_link" target="blank_">SITE</a>
        </SlideAnimateX>
        <SlideAnimateX delay={1.5} xH={-50}>
          <p className="prompt">YEAR 2000</p>
        </SlideAnimateX>
        <SlideAnimateY delay={2} yH={50}>
          <p className="mainTextY2k">
          <strong className="strongY2k">THE</strong> start of my coding journey, this website was more of a practice run for my CSS and HTML skills back when I started to really
          get into coding. It consist of things that I find interesting utilizing the Y2K's ERA aesthetic.
        </p>
        </SlideAnimateY>
        
        <AppearText dur={1}>
          <motion.div
          >
            <img className="pic" src={y2k1} alt="Image of the Y2K website" />

          </motion.div>
        </AppearText>

        <SlideAnimateY delay={1} yH={-50}>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <img src={y2k4} alt="Image of the Y2K website" />

          </motion.div>
        </SlideAnimateY>

        <SlideAnimateX delay={1} xH={50}>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <img className="pic" src={y2k2} alt="Image of the Y2K website" />
          </motion.div>
        </SlideAnimateX>

        <SlideAnimateY delay={1} yH={50}>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <img className="pic" src={y2k3} alt="Image of the Y2K website" />
          </motion.div>
        </SlideAnimateY>
        <SlideAnimateY delay={3} yH={50}>
          <div className="blockPro"></div>
        </SlideAnimateY>
        <SlideAnimateX  delay={1} xH={-50}>
          <h1 className="techUsedY2k">TECH USED</h1>
        </SlideAnimateX>
        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">HTML</p>
        </SlideAnimateX>
        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">CSS</p>
        </SlideAnimateX>
        <SlideAnimateY delay={3} yH={50}>
          <div className="bar"></div>
        </SlideAnimateY>
        <SlideAnimateY delay={1} yH={-50}>
          <img src={jester} className="jester" alt="jester" />
        </SlideAnimateY>
        <SlideAnimateX delay={2.5} xH={-50}>
          <Link className="Project_link" to="/PROJECTS">more projects</Link>
        </SlideAnimateX>
      </section>
    </main>
  </>
}

export default Y2K