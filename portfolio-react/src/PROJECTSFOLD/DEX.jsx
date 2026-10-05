//https://dexnav-pokedex.vercel.app/
import AppearText from "../components/AppearText"
import { motion } from "motion/react"
import pokedex from "../images/DEX/pokedex1.png"
import inspo from "../images/DEX/Wireframe.jpg"
import wireframe from "../images/DEX/INSPO.jpg"
import { Link } from "react-router-dom"
import SlideAnimateY from "../components/SlideAnimateY"
import { SlideAnimateX } from "../components/SlideAnimateX"


const DEX = () => {
  return <>
    <main className="dex-main">
      <section className="waste-main">
        <SlideAnimateX delay={1} xH={-50}>
          <h1 className="y2kTitle">Dexnav</h1>
        </SlideAnimateX>
        <SlideAnimateX delay={1.5} xH={-50}>
          <a href="https://github.com/kcp3000/project-pokedex" className="Project_link" target="blank_">GITHUB</a>
        </SlideAnimateX>
        <SlideAnimateX delay={1.5} xH={-50}>
          <a href="//https://dexnav-pokedex.vercel.app/" className="Project_link" target="blank_">SITE</a>
        </SlideAnimateX>
        <SlideAnimateX delay={1.5} xH={-50}>
          <p className="prompt">Find your MON!</p>
        </SlideAnimateX>
        <SlideAnimateY delay={2} yH={50}>
          <p className="mainTextY2k">
            <strong className="strongWaste">Find</strong> your favorite pokemon using my Y2K-inspired pokedex across ALL 9 generation of pokemon as well as pokemon types!
          </p>
        </SlideAnimateY>
        

        <AppearText dur={1}>
          <motion.div
          >
            <img src={pokedex} alt="Image of the dexnav-pokedex website" />
          </motion.div>
        </AppearText>
        <SlideAnimateY delay={3} yH={50}>
          <div className="blockPro"></div>
        </SlideAnimateY>
        
        {/* 7^^ */}
        
        
        <SlideAnimateY delay={1} yH={-50}>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <img className="pic" src={inspo} alt="Image of the dexnav inspiration" />
          </motion.div>
        </SlideAnimateY>
        
        

        <SlideAnimateX delay={1} xH={50}>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <img className="pic" src={wireframe} alt="wireframe of the dexnav-pokedex website" />
          </motion.div>
        </SlideAnimateX>
        

        <SlideAnimateX delay={1} xH={-50}>
          <h1 className="techUsedWaste">TECH USED</h1>
        </SlideAnimateX>

        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">REACT</p>
        </SlideAnimateX>

        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">TS</p>
        </SlideAnimateX>
        {/* 10 */}
        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">CSS</p>
        </SlideAnimateX>
        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">HTML</p>
        </SlideAnimateX>
        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">Poke API</p>
        </SlideAnimateX>
        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">FRAMER MOTION</p>
        </SlideAnimateX>
        <SlideAnimateX delay={2.5} xH={-50}>
          <Link className="Project_link" to="/PROJECTS">more projects</Link>
        </SlideAnimateX>
      </section>
    </main>
  </>
}

export default DEX