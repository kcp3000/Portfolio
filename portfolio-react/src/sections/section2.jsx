import JS from "../images/javascript--v2.png"
import TS from "../images/Typescript_logo_2020.svg.png"
import express from "../images/express-js.png"
import framer from "../images/framer-motion-logo-png.png"
import git from "../images/Git_icon.svg.png"
import node from "../images/node-js-icon.png"
import knex from "../images/knex-js-icon.png"
import postgres from "../images/Postgresql.png"
import reacticon from "../images/React-icon.svg.png"
import bbyPic from "../images/cropped bby pic.jpg"
import {SlideAnimateX}  from "../components/SlideAnimateX"
import  SlideAnimateY  from "../components/SlideAnimateY"

export function Section2() {
  return <div className="section2_container">
    <section className="grid_container_section2_text">
      <SlideAnimateX delay={0.5} xH={-50}>
        <h1 className="bio">BIO</h1>
      </SlideAnimateX>
      <SlideAnimateY delay={1.5} yH={50}>
        <p>Hello! I'm a . . . </p>
      </SlideAnimateY>
      
      <SlideAnimateY delay={1.5} yH={50}>
        <p className="fullStack">FULLSTACK DEVELOPER.</p>
      </SlideAnimateY>
      <SlideAnimateY delay={1.5} yH={50}>
        <p>
          I'm well versed in both Frontend and Backend; primarily using Javascript/Typescript and PostgresSQL
          as my main tech stack, but alway open to learning more! Most importantly, I love to create interesting, off-the-wall designs that leaves a lasting impression.
          Ultimately, I'm here to
        </p>
      </SlideAnimateY>
      <SlideAnimateY delay={1.5} yH={50}>
        <p className="create">CREATE.</p>
      </SlideAnimateY>
      <SlideAnimateX delay={1.2} xH={50}>
         <div className="block2" />
      </SlideAnimateX>
     <SlideAnimateX delay={1} xH={50}>
        <div className="block2" />
     </SlideAnimateX>
      
    </section>
    
    <div className="ticker_container">
      <div className="ticker">
        <ul className="ticker_list_images">
          <li>
            <img src={JS} alt="javascript icon" className="java" />
          </li>
          <li>
            <img src={TS} alt="typescript icon" className="type" />
          </li>
          <li>
            <img src={express} alt="express icon" className="exp" />
          </li>
          <li>
            <img src={framer} alt="motion icon" className="frame" />
          </li>
          <li>
            <img src={git} alt="git icon" className="git" />
          </li>
          <li>
            <img src={node} alt="node icon" className="node" />
          </li>
          <li>
            <img src={knex} alt="knex icon" className="knex" />
          </li>
          <li>
            <img src={postgres} alt="postgres icon" className="post" />
          </li>
          <li>
            <img src={reacticon} alt="react icon" className="react" />
          </li>
        </ul>

        <ul className="ticker_list_images" aria-hidden="true">
          <li>
            <img src={JS} alt="javascript icon" className="java" />
          </li>
          <li>
            <img src={TS} alt="typescript icon" className="type" />
          </li>
          <li>
            <img src={express} alt="express icon" className="exp" />
          </li>
          <li>
            <img src={framer} alt="motion icon" className="frame" />
          </li>
          <li>
            <img src={git} alt="git icon" className="git" />
          </li>
          <li>
            <img src={node} alt="node icon" className="node" />
          </li>
          <li>
            <img src={knex} alt="knex icon" className="knex" />
          </li>
          <li>
            <img src={postgres} alt="postgres icon" className="post" />
          </li>
          <li>
            <img src={reacticon} alt="react icon" className="react" />
          </li>
        </ul>
      </div>
    </div>

  </div>

}

export default Section2