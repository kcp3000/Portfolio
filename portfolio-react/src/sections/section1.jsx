import kevin1 from "../images/IMG_0137.jpg"
import kevin2 from "../images/midmidmid.jpg"
import Leon from "../images/Leon_Joseph_Florentin_Bonnat_-_The_Martyrdom_of_St_Denis_(mural)_-_(MeisterDrucke-90283).jpg"
import {Quote} from "lucide-react"



export function Section1() {

  return (
  <div className="section1_container">
    <section className="grid_container1">
      <h1>Kevin</h1>
      <h1>Deleon</h1>
      <p>Fullstack</p>
      <p>Engineer</p>
      <p>FRONTEND</p>
      <p>BACKEND</p>
      <p>ARTIST.</p>
    </section>
    <section className="grid_container2">
    <h1>Let me show you my piece of reality; I'm here to create.</h1>
    <img src={kevin2} alt="" />
    <img src={kevin1} alt="" />
    </section>
  </div>)
}