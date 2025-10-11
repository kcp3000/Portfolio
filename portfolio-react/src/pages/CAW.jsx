//https://ascentak.github.io/Project-Ascent/
import caw1 from "../images/CAW/caw1.JPG"
import caw2 from "../images/CAW/caw2.png"
import caw5 from "../images/CAW/caw1.png"
import oldCover from "../images/CAW/oldCover.png"
import oldCourt from "../images/CAW/oldCourt.png"
import oldWelcome from "../images/CAW/oldWelcome.png"
import oldOur from "../images/CAW/oldOur.png"
import cawOur from "../images/CAW/caw6Our.png"
import cawWelcome from "../images/CAW/cawWelcome.png"
import AppearText from "../components/AppearText"
import { motion } from "motion/react"
import { Link } from "react-router-dom"
import SlideAnimateY from "../components/SlideAnimateY"
import { SlideAnimateX } from "../components/SlideAnimateX"


const CAW = () => {
  return <>
    <main>
      <section className="caw-main">
        <SlideAnimateX delay={1} xH={-50}>
            <p className="y2kTitle">CAW</p>
        </SlideAnimateX>
        <SlideAnimateX delay={1.5} xH={-50}> 
          <a className="Project_link" href="https://www.creativeartworks.org/blogpreview/2025/8/30/a-fusion-of-art-and-information">SITE</a>
        </SlideAnimateX>
        <SlideAnimateX delay={1.5} xH={-50}>
          <p className="prompt">Creative Art Works</p>
        </SlideAnimateX>
        
        <SlideAnimateY delay={2} yH={50}>
           <p className="mainTextCAW">
            <strong className="strongCAW">Interned</strong> @ CAW (Creative Art Works) for the opportunty to transform the Family Court House booklet for all family courts in NYC! 
            In the span of ~5 weeks, I along with 17 other talented Young Apprentices using Adobe Indesign worked together to create a booklet worth remebering.
          </p>
        </SlideAnimateY>
         
          <SlideAnimateY delay={2} yH={50}>
            <motion.div
            >
              <img src={caw1} alt="Image of the Y2K website" />
            </motion.div>
          </SlideAnimateY>

          <SlideAnimateY delay={2} yH={50}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <img className="pic" src={caw2} alt="Image of the Y2K website" />
            </motion.div>
          </SlideAnimateY>

          <SlideAnimateY delay={2} yH={50}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <img className="pic" src={caw5} alt="Image of the Y2K website" />
            </motion.div>
          </SlideAnimateY>
          <SlideAnimateY delay={1} yH={50}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <img className="pic" src={oldCover} alt="Image of the Y2K website" />
            </motion.div>
          </SlideAnimateY>
          <SlideAnimateY delay={1} yH={50}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <img className="pic" src={oldCourt} alt="Image of the Y2K website" />
            </motion.div>
          </SlideAnimateY>
          <SlideAnimateY delay={3} yH={50}>
            <div className="blockPro"></div>
          </SlideAnimateY>
          <SlideAnimateY delay={1} yH={50}>
            <h1 className="techUsedCAW">BEFORE</h1>
          </SlideAnimateY>
          <SlideAnimateY delay={2} yH={50}>
            <h1 className="techUsedCAW">AFTER</h1>
          </SlideAnimateY>
          <SlideAnimateY delay={3} yH={50}>
            <div className="bar"></div>
          </SlideAnimateY>
          <SlideAnimateX delay={2.5} xH={-50}>
            <Link className="Project_link" to="/PROJECTS">more projects</Link>
          </SlideAnimateX>
          <SlideAnimateY delay={1} yH={50}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <img className="pic" src={oldWelcome} alt="Image of the Y2K website" />
            </motion.div>
          </SlideAnimateY>
          <SlideAnimateY delay={1} yH={50}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <img className="pic" src={oldOur} alt="Image of the Y2K website" />
            </motion.div>
          </SlideAnimateY>
          <SlideAnimateY delay={2} yH={50}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <img className="pic" src={cawOur} alt="Image of the Y2K website" />
            </motion.div>
          </SlideAnimateY>
          <SlideAnimateY delay={2} yH={50}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <img className="pic" src={cawWelcome} alt="Image of the Y2K website" />
            </motion.div>
          </SlideAnimateY>
      </section>
    </main>
  </>
}

export default CAW

//Will probably change this to be the graphic design shit we did this summer