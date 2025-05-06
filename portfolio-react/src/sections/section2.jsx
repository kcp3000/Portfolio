import JS from "../images/javascript--v2.png"
import TS from "../images/Typescript_logo_2020.svg.png"
import express from "../images/express-js.png"
import framer from "../images/framer-motion-logo-png.png"
import git from "../images/Git_icon.svg.png"
import node from "../images/node-js-icon.png"
import knex from "../images/knex-js-icon.png"
import postgres from "../images/Postgresql.png"
import reacticon from "../images/React-icon.svg.png"

export function Section2() {
  return <div className="section2_container">
      <section className="grid_container_section2_text">
        <div className="line"/>
        <h1>BIO</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </p>
      </section>
      <div className="ticker">
        <ul className="ticker_list_images">
          <li>
            <img src={JS} alt="javascript icon" className="java"/>
          </li>
          <li>
            <img src={TS} alt="typescript icon" className="type"/>
          </li>
          <li>
            <img src={express} alt="express icon" className="exp"/>
          </li>
          <li>
            <img src={framer} alt="motion icon" className="frame"/>
          </li>
          <li>
            <img src={git} alt="git icon" className="git"/>
          </li>
          <li>
            <img src={node} alt="node icon" className="node"/>
          </li>
          <li>
            <img src={knex} alt="knex icon" className="knex"/>
          </li>
          <li>
            <img src={postgres} alt="postgres icon" className="post"/>
          </li>
          <li>
            <img src={reacticon} alt="react icon" className="react"/>
          </li>
        </ul>

        <ul className="ticker_list_images" aria-hidden="true">
          <li>
            <img src={JS} alt="javascript icon" className="java"/>
          </li>
          <li>
            <img src={TS} alt="typescript icon" className="type"/>
          </li>
          <li>
            <img src={express} alt="express icon" className="exp"/>
          </li>
          <li>
            <img src={framer} alt="motion icon" className="frame"/>
          </li>
          <li>
            <img src={git} alt="git icon" className="git"/>
          </li>
          <li>
            <img src={node} alt="node icon" className="node"/>
          </li>
          <li>
            <img src={knex} alt="knex icon" className="knex"/>
          </li>
          <li>
            <img src={postgres} alt="postgres icon" className="post"/>
          </li>
          <li>
            <img src={reacticon} alt="react icon" className="react"/>
          </li>
        </ul>
      </div>
    </div>
  
}