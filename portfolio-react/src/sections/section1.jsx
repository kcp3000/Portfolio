import kevin2 from "../images/midmidmid.jpg"
import Leon from "../images/Leon_Joseph_Florentin_Bonnat_-_The_Martyrdom_of_St_Denis_(mural)_-_(MeisterDrucke-90283).jpg"
import AppearText from "../components/AppearText"



export function Section1() {

  return (
  <div className="section1_container">
    <section className="grid_container1">
      <AppearText dur={1}>
        <h1>Deleon</h1>
      </AppearText>
      <AppearText dur={2.8}>
        <p>FRONTEND</p>
      </AppearText>
      <AppearText dur={2.4}>
        <p>BACKEND</p>
      </AppearText>
      <AppearText dur={2}>
        <p>ARTIST.</p>
      </AppearText>
      <AppearText dur={2.8}>
        <p>YEAR</p>
      </AppearText>
      <AppearText dur={2.4}>
        <p>2025</p>
      </AppearText>
      <AppearText dur={2}>
        <img src={Leon} alt="" />
      </AppearText>
      <AppearText dur={2.4}>
        <img src={Leon} alt="" />
      </AppearText>
      <AppearText dur={2.8}>
        <img src={Leon} alt="" />
      </AppearText>
    </section>
  </div>)
}