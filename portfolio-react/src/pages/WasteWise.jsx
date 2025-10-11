//https://waste-wise.onrender.com/
import AppearText from "../components/AppearText"
import { motion } from "motion/react"
import waste1 from "../images/wasteWise/README.png"
import waste2 from "../images/wasteWise/waste2.png"
import waste3 from "../images/wasteWise/waste3.png"
import waste4 from "../images/wasteWise/waste4.png"
import { Link } from "react-router-dom"
import SlideAnimateY from "../components/SlideAnimateY"
import { SlideAnimateX } from "../components/SlideAnimateX"


const WasteWise = () => {
  return <>
    <main>
      <section className="waste-main">
        <SlideAnimateX delay={1} xH={-50}>
          <h1 className="y2kTitle">Waste Wise</h1>
        </SlideAnimateX>
        <SlideAnimateX delay={1.5} xH={-50}>
           <a href="//https://waste-wise.onrender.com/" className="Project_link">SITE</a>
        </SlideAnimateX>
        <SlideAnimateX delay={1.5} xH={-50}>
            <p className="prompt">Waste in NYC</p>
        </SlideAnimateX>
        <SlideAnimateY delay={2} yH={50}>
          <p className="mainTextWaste">
            <strong className="strong">Bridging</strong> the gap between food insecurity and food waste by redistributing food that is still perfectly edible but would otherwise be thrown away.
            Through our platform, we connect New Yorkers facing hunger with local food banks and meal programs, offering resource locators and nutritional guidance.
            We also promote sustainability by educating the public and showcasing volunteer opportunities, while providing restaurants and companies a simplified food donation network to ensure surplus food reaches people in need.
            All in all, we aim to build a more sustainable and fair food system for our city.
          </p>
        </SlideAnimateY>
        
        <AppearText dur={1}>
          <motion.div
          >
            <img src={waste1} alt="Image of the WasteWise website" />
          </motion.div>
        </AppearText>

        <SlideAnimateY delay={1} yH={-50}>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <img className="pic" src={waste3} alt="Image of the WasteWise website" />
          </motion.div>
        </SlideAnimateY>

        <SlideAnimateX delay={1} xH={50}>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <img className="pic" src={waste2} alt="Image of the WasteWise website" />
          </motion.div>
        </SlideAnimateX>

        <SlideAnimateY delay={1} yH={50}>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <img className="pic" src={waste4} alt="Image of the WasteWise website" />
          </motion.div>
        </SlideAnimateY>
        <SlideAnimateY delay={3} yH={50}>
          <div className="blockPro"></div>
        </SlideAnimateY>
        <SlideAnimateX delay={1} xH={-50}>
          <h1 className="techUsedWaste">TECH USED</h1>
        </SlideAnimateX>
        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">REACT</p>
        </SlideAnimateX>
        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">JS</p>
        </SlideAnimateX>  
        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">CSS</p>
        </SlideAnimateX>
        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">HTML</p>
        </SlideAnimateX>
        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">POSTGRES</p>
        </SlideAnimateX>  
        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">EXPRESS</p>
        </SlideAnimateX>  
        <SlideAnimateX delay={1} xH={-50}>
          <p className="tech">FRAMER MOTION</p>
        </SlideAnimateX>  
        <SlideAnimateY delay={3} yH={50}>
          <div className="bar"></div>
        </SlideAnimateY>
        <SlideAnimateX delay={2.5} xH={-50}>
          <Link className="Project_link" to="/PROJECTS">more projects</Link>
        </SlideAnimateX>
        
      </section>
    </main>
  </>
}

export default WasteWise