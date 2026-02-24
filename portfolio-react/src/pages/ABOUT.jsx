import AppearText from "../components/AppearText"
import SlideAnimateY from "../components/SlideAnimateY"
import { SlideAnimateX } from "../components/SlideAnimateX"
import pink from "../images/pink_sweater2.jpg"
import InView from "../components/InView"
import github from "../images/randomThings/github.png"
import linkedin from "../images/randomThings/linkedin.png"
import art1 from "../images/about_images/artbook1.jpg"
import closeup from "../images/about_images/artbook1CloseUp.png"
import art2 from "../images/about_images/artbook2.jpg"
import chu from "../images/about_images/chu.png"
import chu2 from "../images/about_images/chu2.jpg"
import intruders from "../images/about_images/intruders.jpg"
import sakamoto from "../images/about_images/sakamoto.jpg"
import humans from "../images/about_images/nolongerhuman.png"


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
            <img className="imageAbout" src={pink} alt="Kevin_Deleon_Pink_Hoodie" />
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
        <SlideAnimateX delay={3} xH={-10}>
          <a href="https://www.linkedin.com/in/kevin-deleon-55047a26a/" target="blank_">
            <img className="ProLink" src={linkedin} alt="Linkedin_Logo" />
          </a>
        </SlideAnimateX>
        <SlideAnimateX delay={3} xH={-10}>
          <a href="https://github.com/kcp3000" target="blank_">
            <img className="ProLink" src={github} alt="Github_Logo" />
          </a>
        </SlideAnimateX>
      </section>
      
      <section className="about_container2">
        <InView d={"grid"} delay={0.5}>
          <h1 className="aboutThings">THINGS THAT I DO</h1>
        </InView>
        <InView d={"grid"} delay={0.5}>
          <p className="aboutSubtitle">ARTIST:</p>
        </InView>
        <InView d={"grid"} delay={0.5}>
          <img src={art1} alt="art_book" />
        </InView>
        <InView d={"grid"} delay={0.5}>
          <img src={art2} alt="art_book" />
        </InView>
        <InView d={"grid"} delay={0.5}>
          <img src={closeup} alt="art_book_close_up" />
        </InView>
        <InView d={"grid"} delay={0.5}>
          <p className="aboutMainText">Art has been a part of my life for as long as I lived. I was first inspired by my sister, she was doing a graffiti of her name, and kid-me was fascinated. Ever since then, art, <span className="spanColorChange">CREATING</span>, has become a core purpose for myself.</p>
        </InView>
        <InView d={"grid"} delay={0.5}>
          <p className="aboutSubtitle">CHU:</p>
        </InView>
        <InView d={"grid"} delay={0.5}>
          <img src={chu2} alt="cat" />
        </InView>
        <InView d={"grid"} delay={0.5}>
          <img src={chu} alt="cat" />
        </InView>
        <InView d={"grid"} delay={0.5}>
          <p className="aboutMainText">Little Chu! My pet cat who's about to 7, what a middle aged man.</p>
        </InView>
        <InView d={"grid"} delay={0.5}>
          <p className="aboutSubtitle">BOOKS:</p>
        </InView>
        <InView d={"grid"} delay={0.5}>
          <img src={sakamoto} alt="cat" />
        </InView>
        <InView d={"grid"} delay={0.5}>
          <img src={intruders} alt="cat" />
        </InView>
        <InView d={"grid"} delay={0.5}>
          <img src={humans} alt="cat" />
        </InView>
        <InView d={"grid"} delay={0.5}>
          <p className="aboutMainText">I love books of all kind! Reading (and to an extent, writing) are fun past times I'll occasionally engross myself to. Manga, self-help books, biographies, etc, so long as I find it interesting, I'm reading it.</p>
        </InView>
      </section>
    </div>
  </main>
}

export default ABOUT

