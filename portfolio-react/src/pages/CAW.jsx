//https://ascentak.github.io/Project-Ascent/
// import caw1 from "../images/CAW/caw1.jpg"
import caw2 from "../images/CAW/caw2.jpg"
import caw3 from "../images/CAW/caw3.jpg"
import caw4 from "../images/CAW/caw4.jpg"
import AppearText from "../components/AppearText"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

const CAW = () => {
  return <>
    <main>
      <section className="caw-main">
        <AppearText dur={0.5}>
          <div className="caw-description">
            <p className="webLink">WIP</p>
            <p>Creative Art Works! (Click to view!)</p>
            <p>
              The start of my coding journey, this website was more of a practice run for my CSS and HTML skills back when I started to really
              get into coding. It consist of things that I enjoyed utilizing the Y2K aesthetic.
            </p>
            <Link to={"/"}>
              HOME
            </Link>
          </div>

        </AppearText>

        <div className="y2k-pictures">
          <AppearText dur={1}>
            <motion.div
              whileHover={{ scale: 1.1 }}
            >
              <img src={caw4} alt="Image of the Y2K website" />
            </motion.div>
          </AppearText>

          <AppearText dur={1}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <img className="pic" src={caw3} alt="Image of the Y2K website" />
            </motion.div>
          </AppearText>

          <AppearText dur={1}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <img className="pic" src={caw2} alt="Image of the Y2K website" />
            </motion.div>
          </AppearText>

          <AppearText dur={0.5}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <img className="pic" src={caw1} alt="Image of the Y2K website" />
            </motion.div>

          </AppearText>
        </div>
      </section>
    </main>
  </>
}

export default CAW

//Will probably change this to be the graphic design shit we did this summer