import AppearText from "../components/AppearText"
import Tilt from "../components/Tilt"
import SlideAnimateY from "../components/SlideAnimateY"
import { SlideAnimateX } from "../components/SlideAnimateX"



export function Section1() {

  return (
    <div className="section1_container">
      <section className="grid_container1">
        <AppearText dur={2}>
          <SlideAnimateY delay={2.5} yH={-50}>
            <h1 className="lastname">DELEON</h1>
          </SlideAnimateY>
        </AppearText>
        <AppearText dur={3}>
          <SlideAnimateY delay={3.3} yH={-50}>
            <p>FRONTEND</p>
          </SlideAnimateY>
        </AppearText>
        <AppearText dur={2.6}>
          <SlideAnimateY delay={3.6} yH={-50}>
            <p>BACKEND</p>
          </SlideAnimateY>
        </AppearText>
        <AppearText dur={2.4}>
          <SlideAnimateY delay={3.9} yH={-50}>
            <p>ARTIST</p>
          </SlideAnimateY>
        </AppearText>
        <AppearText dur={1}>
          <Tilt />
        </AppearText>
        <AppearText dur={1.5}>
          <p>PORTFOLIO</p>
        </AppearText>
        <SlideAnimateY delay={3} yH={-50}>
          <div className="shadow"></div>
        </SlideAnimateY>
        <SlideAnimateX delay={4} xH={-150}>
          <div className="bar"></div>
        </SlideAnimateX>
      </section>
    </div>)
}

export default Section1