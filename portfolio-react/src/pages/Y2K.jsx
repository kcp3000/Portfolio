//https://kcp3000.github.io/Y2K/
import y2k1 from "../images/y2k/y2k1.png"
import y2k2 from "../images/y2k/y2k2.png"
import y2k3 from "../images/y2k/y2k3.png"
import y2k4 from "../images/y2k/y2k4.png"
import AppearText from "../components/AppearText"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

const Y2K = () => {
  return <>
    <main>
      <section className="y2k-main">
        <AppearText dur={0.5}>
          <div className="y2k-description">
            <a href="https://kcp3000.github.io/Y2K/" className="webLink">Y2K</a>
            <p>YEAR 2000 (Click to view!)</p>
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
              <img src={y2k4} alt="Image of the Y2K website" />
            </motion.div>
          </AppearText>

          <AppearText dur={1}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <img className="pic" src={y2k3} alt="Image of the Y2K website" />
            </motion.div>
          </AppearText>

          <AppearText dur={1}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <img className="pic" src={y2k2} alt="Image of the Y2K website" />
            </motion.div>
          </AppearText>

          <AppearText dur={0.5}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <img className="pic" src={y2k1} alt="Image of the Y2K website" />
            </motion.div>

          </AppearText>
        </div>
      </section>
    </main>
  </>
}

export default Y2K