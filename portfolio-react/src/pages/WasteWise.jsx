//https://waste-wise.onrender.com/
import AppearText from "../components/AppearText"
import { motion } from "motion/react"
import waste1 from "../images/wasteWise/README.png"
import waste2 from "../images/wasteWise/waste2.png"
import waste3 from "../images/wasteWise/waste3.png"
import waste4 from "../images/wasteWise/waste4.png"

const WasteWise = () => {
  return <>
    <main>
      <section className="waste-main">
        <AppearText dur={0.5}>
          <h1 className="y2kTitle">Waste Wise</h1>
        </AppearText>
        <a href="//https://waste-wise.onrender.com/" className="webLink">SITE</a>
        <p>Waste in NYC</p>
        <p>
          <strong className="strong">Bridging</strong> the gap between food insecurity and food waste by redistributing food that is still perfectly edible but would otherwise be thrown away.
          Through our platform, we connect New Yorkers facing hunger with local food banks and meal programs, offering resource locators and nutritional guidance.
          We also promote sustainability by educating the public and showcasing volunteer opportunities, while providing restaurants and companies a simplified food donation network to ensure surplus food reaches people in need.
          All in all, we aim to build a more sustainable and fair food system for our city.
        </p>
        <AppearText dur={1}>
          <motion.div
            whileHover={{ scale: 1.1 }}
          >
            <img src={waste4} alt="Image of the WasteWise website" />
          </motion.div>
        </AppearText>

        <AppearText dur={1}>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <img className="pic" src={waste3} alt="Image of the WasteWise website" />
          </motion.div>
        </AppearText>

        <AppearText dur={1}>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <img className="pic" src={waste2} alt="Image of the WasteWise website" />
          </motion.div>
        </AppearText>

        <AppearText dur={0.5}>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <img className="pic" src={waste1} alt="Image of the WasteWise website" />
          </motion.div>
        </AppearText>
      </section>
    </main>
  </>
}

export default WasteWise