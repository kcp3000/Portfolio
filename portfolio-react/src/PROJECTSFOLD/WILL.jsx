import will1 from "../images/WILL/will1.jpg"
import will2 from "../images/WILL/will2.jpg"
import will3 from "../images/WILL/will3.jpg"
import inspo1 from "../images/WILL/inspo1.jpg"
import inspo2 from "../images/WILL/inspo2.jpg"
import inspo3 from "../images/WILL/inspo3.jpg"
import SlideAnimateY from "../components/SlideAnimateY"
import { SlideAnimateX } from "../components/SlideAnimateX"
import FadeIn from "../components/FadeIn"
import FadeOut from "../components/FadeOut"

const WILL = () => {
  return <>
    <section className="will_section">
      <FadeOut y={0.1} y2={0.14}>
        <div className="will_title_container">
          <SlideAnimateX delay={1} xH={-50}>
            <h1 className="title">From Boring to a Design that Screams TOUCHDOWN!</h1>
          </SlideAnimateX>
        </div>
        <div className="role_dur_container">
          <div className="role_container">
            <div className="ROLE">
              <SlideAnimateX delay={1.5} xH={-50}>
                <h2 className="subtitle">ROLE</h2>
              </SlideAnimateX>
              <SlideAnimateX delay={2} xH={-50}>
                <p className="sub_text">Qualitative Research</p>
              </SlideAnimateX>
              <SlideAnimateX delay={2} xH={-50}>
                <p className="sub_text">Visual Designer</p>
              </SlideAnimateX>

            </div>
          </div>
          <div className="dur_container">
            <div className="DUR">
              <SlideAnimateX delay={1.5} xH={-50}>
                <h2 className="subtitle">DURATION</h2>
              </SlideAnimateX>
              <SlideAnimateX delay={2} xH={-50}>
                <p className="sub_text">2 Months</p>
              </SlideAnimateX>
            </div>
          </div>
          <div className="will_block_container">
            <SlideAnimateX delay={1.5} xH={-50}>
              <div />
            </SlideAnimateX>
            <SlideAnimateX delay={2} xH={-80}>
              <div />
            </SlideAnimateX>
            <SlideAnimateX delay={1.5} xH={-50}>
              <div />
            </SlideAnimateX>
            <SlideAnimateX delay={2} xH={-80}>
              <div />
            </SlideAnimateX>
          </div>
        </div>
      </FadeOut>

      <FadeOut y={0.26} y2={0.32}>
        <FadeIn y={0.12} y2={0.16}>
          <div className="will_content_container">
            <div className="will_intro">
              <h2 className="subtitle">The Client</h2>
              <p className="text">
                WeWILLThruSports is a non-profit organization that primarily focuses on uniting the community through exercise and sports.
                WeWILLThruSports mission is to bridge the gap by helping as many kids as possible gain access to sports, opening doors to growth, opportunity, and a brighter future.
              </p>
            </div>
          </div>
          <div className="will_content_container">
            <div className="will_problem">
              <h2 className="subtitle">The Problem</h2>
              <p className="text">
                The guys at WWTS came to me with an issue that mainly had to do with their current design build that they were working with, they would describe it as <span className="will_span">“dated”</span> and <span className="will_span">“disorganized”</span>.
                Not only on the visual aspect, but also on the performance of the website too; it had a long winded video playing in the background constantly which caused the entire site to slow down.
              </p>
            </div>
          </div>
        </FadeIn>
      </FadeOut>

      <FadeOut y={0.42} y2={0.5}>
        <FadeIn y={0.3} y2={0.36}>
          <div className="will_content_container">
            <div className="will_imagine">
              <h2 className="title">Imagine Being the Parent</h2>
              <p className="sub_text">
                Planning to send your child to a little after school gig so you can have some you time, a win-win no?
              </p>
              <p className="text">But you're presented with this--</p>
              <div className="will_img_container">
                <img src={will1} alt="" />
                <img src={will2} alt="" />
                <img src={will3} alt="" />
              </div>
            </div>
          </div>
        </FadeIn>
      </FadeOut>

      <FadeOut y={0.52} y2={0.6}>
        <FadeIn y={0.34} y2={0.38}>
          <div className="will_content_container">
            <div className="will_solutions">
              <h2 className="subtitle">Where Do We Start?</h2>
              <p className="sub_text">
                Here's the focus:
              </p>
              <ul className="will_list">
                <li className="text">
                  Find a design theme that the entire website can follow.
                  I want to take into consideration the types of users that are going to be visiting the website.
                </li>
                <li className="text">
                  Figuring out the User Journey is crucial to minimizing the confusion that is present on their current build.
                </li>
                <li className="text">
                  Lastly, find ways to reduce the lag that is plaguing the site with slow downs.
                </li>
              </ul>
              <div className="will_sendoff_container">
                <p className="subtitle">With that, let's get on with the research. </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </FadeOut>

      <FadeOut y={0.68} y2={0.8}>
        <FadeIn y={0.56} y2={0.6}>
          <div className="will_research_container">
            <div className="will_research_content">
              <h2 className="subtitle">The Research</h2>
              <p className="text">
                My first initial meeting with WWTS was to do a mixture of two things: firstly to get to know each other, and what we’re aiming to accomplish.
                Secondly to figure out a theme they would like to go with.
                During that meeting I can sum up what they want with 2 words, “Sporty” and “Fun”.
              </p>
              <p className="text">
                I got to work. I typically start with finding inspiration around the web for a design that incorporates the idea of “Sporty” and “Fun”.
                I looked at Sports Magazines, Skateboarding Magazines, and Sports Newspaper Section as a base to go off from.
              </p>
            </div>
            <div className="img_container">
              <img className="img_will" src={inspo1} alt="" />
              <img className="img_will" src={inspo2} alt="" />
              <img className="img_will" src={inspo3} alt="" />
            </div>
          </div>
        </FadeIn>
      </FadeOut>



    </section>
  </>
}

export default WILL