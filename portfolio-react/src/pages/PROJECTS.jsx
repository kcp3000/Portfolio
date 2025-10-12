import SlideAnimateY from "../components/SlideAnimateY"
import { SlideAnimateX } from "../components/SlideAnimateX"
import { motion } from "motion/react"
import AppearText from "../components/AppearText"
import { Link } from "react-router-dom"

const PROJECT = () => {
  return <>
    <div className="projects_title">
      <h1 className="Pro_page">PROJECTS</h1>
      <p>kindly take a look</p>
    </div>
    <section className="project_container">
      <div className="testblock"></div>
      <div className="testblock"></div>
      <div className="Smalltestblock"></div>
      <div className="Smalltestblock"></div>
      <div className="testblock"></div>
      <div className="testblock"></div>
      <div className="Smalltestblock"></div>
      <div className="Smalltestblock"></div>
      <div className="testblock"></div>
      <div className="testblock"></div>
      <div className="Smalltestblock"></div>
      <div className="Smalltestblock"></div>
    </section>
  </>
}

export default PROJECT