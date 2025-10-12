import SlideAnimateY from "../components/SlideAnimateY"
import { motion } from "motion/react"
import { Link } from "react-router-dom"
import InView from "../components/InView"

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
        <div className="testblock"></div>
      </InView>
      <InView d={"grid"} delay={2}>
        <div className="testblock"></div>
      </InView>
      <InView d={"grid"} delay={0.5}>
        <div className="Smalltestblock"></div>
      </InView>
      <InView d={"grid"} delay={0.5}>
        <div className="Smalltestblock"></div>
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