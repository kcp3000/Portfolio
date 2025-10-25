import AppearText from "../components/AppearText"
import SlideAnimateY from "../components/SlideAnimateY"
import { SlideAnimateX } from "../components/SlideAnimateX"

const ABOUT = () => {
  return <main className="about_main">
    <div className="da_whole_ting_about">
      <section className="about_container1">
        <SlideAnimateX delay={2} xH={-50}>
          <h1 className="about_fName">Kevin</h1>
        </SlideAnimateX>
        <SlideAnimateX delay={1} xH={-50}>
          <h1 className="about_lName">DELEON</h1>
        </SlideAnimateX>
        <SlideAnimateX delay={2.5} xH={10}>
          <div className="about_temp1"></div>
        </SlideAnimateX>
        <SlideAnimateX delay={2.5} xH={10}>
          <div className="about_temp2"></div>
        </SlideAnimateX>
        <SlideAnimateX delay={2.5} xH={10}>
          <div className="about_temp1"></div>
        </SlideAnimateX>
        <img src="" alt="" />
      </section>
    </div>
  </main>
}

export default ABOUT

//Will probably change this to be the graphic design shit we did this summer