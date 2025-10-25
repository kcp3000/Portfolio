import SlideAnimateY from "../components/SlideAnimateY"
import { motion } from "motion/react"
import { Link } from "react-router-dom"
import InView from "../components/InView"

//https://waste-wise.onrender.com
//https://ascentak.github.io/Project-Ascent/
//https://kcp3000.github.io/Y2K/
//https://github.com/Gallery-Walk/Collection-Area
//https://www.creativeartworks.org/blogpreview/2025/8/30/a-fusion-of-art-and-information

const PROJECT = () => {
  return <>
    <div className="projects_title">
      <SlideAnimateY delay={1} yH={50}>
        <h1 className="Pro_page">PROJECTS</h1>
      </SlideAnimateY>
      <SlideAnimateY delay={1.5} yH={50}>
        <p>kindly take a look</p>
      </SlideAnimateY>
    </div>
    <section className="project_container">
      <InView d={"grid"} delay={2}>
        <p className="title_caption">Design Work</p>
        <div className="testblock"></div>
      </InView>
      <InView d={"grid"} delay={2}>
        <p className="title_caption">SWE Fullstack</p>
        <div className="testblock"></div>
      </InView>
      <InView d={"grid"} delay={0.5}>
        <div className="Smalltestblock">
          <p className="mainTextCAW">
            Interned @ CAW (Creative Art Works) for the opportunity to transform the Family Court House booklet for all family courts in NYC!
            In the span of ~5 weeks, I along with 17 other talented Young Apprentices using Adobe Indesign worked together to create a booklet worth remembering.</p>
        </div>

      </InView>
      <InView d={"grid"} delay={0.5}>
        <div className="Smalltestblock">
          <p className="mainTextCAW">
            Bridging the gap between food insecurity and food waste by redistributing food that is still perfectly edible but would otherwise be thrown away.
            Through our platform, we connect New Yorkers facing hunger with local food banks and meal programs, offering resource locators and nutritional guidance.
            We also promote sustainability by educating the public and showcasing volunteer opportunities, while providing restaurants and companies a simplified food donation network to ensure surplus food reaches people in need.
            All in all, we aim to build a more sustainable and fair food system for our city.
          </p>
        </div>
      </InView>
      <InView d={"grid"} delay={0.5}>
        <p className="title_caption">SWE Frontend</p>
        <div className="testblock"></div>
      </InView>
      <InView d={"grid"} delay={0.5}>
        <p className="title_caption">SWE Frontend</p>
        <div className="testblock"></div>
      </InView>
      <InView d={"grid"} delay={0.5}>
        <div className="Smalltestblock">
          <p className="mainTextCAW">
            The start of my coding journey, this website was more of a practice run for my CSS and HTML skills back when I started to really
            get into coding. It consist of things that I find interesting utilizing the Y2K's ERA aesthetic.
          </p>
        </div>
      </InView>
      <InView d={"grid"} delay={0.5}>
        <div className="Smalltestblock">
          <p className="mainTextCAW">

          </p>
        </div>
      </InView>
      <InView d={"grid"} delay={0.5}>
        <div className="testblock"></div>
      </InView>
      <InView d={"grid"} delay={0.5}>
        <div className="testblock"></div>
      </InView>
      <InView d={"grid"} delay={0.5}>
        <div className="Smalltestblock"></div>
      </InView>
      <InView d={"grid"} delay={0.5}>
        <div className="Smalltestblock"></div>
      </InView>
    </section>
  </>
}

export default PROJECT