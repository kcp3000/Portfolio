import AppearText from "../components/AppearText"
import SlideAnimateY from "../components/SlideAnimateY"
import { SlideAnimateX } from "../components/SlideAnimateX"
import pink from "../images/pink_sweater2.jpg"
import InView from "../components/InView"
import linkedin from "../images/random_things/Linkedin.png"


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
          <div className="imageAbout_container">
            <img className="imageAbout" src={pink} alt="" />
          </div>
        </SlideAnimateX>
        <SlideAnimateX delay={2.5} xH={10}>
          <div className="about_temp1"></div>
        </SlideAnimateX>
        <SlideAnimateX delay={3} xH={10}>
          <p className="aboutMainText">
            Hello! My name is Kevin Deleon, I am a recent graduate of the Marcy Lab School; a Software Engineering, one year intensive program learning aspects of backend and frontend.
            I operate with this one philosophy, finding an obsession I can master.
            Coding being one of those candidates.
            Such the phrase, <span className="Project_link">“Madness is doing the same thing over and over again and expecting different results"</span>.
            This describes my present self today; but of course this is not the full story. My path led me to a purpose, a belief system that I abide by: <span className="Project_link">“Creating what I deem as cool”</span>.
            I love to create, and most importantly, I love to learn.
          </p>
        </SlideAnimateX>
      </section>
      
      <section className="about_container2">
        <InView d={"grid"} delay={0.5}>
          <h1 className="aboutThings">THINGS THAT I DO</h1>
        </InView>
        <InView d={"grid"} delay={0.5}>
          <p className="title_caption">UNDER CONSTRUCTION</p>
        </InView>
        
      </section>
    </div>
  </main>
}

export default ABOUT

//Will probably change this to be the graphic design shit we did this summer