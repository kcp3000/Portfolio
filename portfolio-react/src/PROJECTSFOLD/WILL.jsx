import will1 from "../images/WILL/will1.jpg"
import will2 from "../images/WILL/will2.jpg"
import will3 from "../images/WILL/will3.jpg"
import inspo1 from "../images/WILL/inspo1.jpg"
import inspo2 from "../images/WILL/inspo2.jpg"
import inspo3 from "../images/WILL/inspo3.jpg"
import option1 from "../images/WILL/Option1.jpg"
import option2 from "../images/WILL/Option2.jpg"
import option3 from "../images/WILL/Option3.jpg"
import option4 from "../images/WILL/Option4.jpg"
import journey from "../images/WILL/JourneyMap1.jpg"
import landing1 from "../images/WILL/landing.jpg"
import landing2 from "../images/WILL/landing2.jpg"
import landingOpen from "../images/WILL/landing_menuOpen.jpg"
import SlideAnimateY from "../components/SlideAnimateY"
import { SlideAnimateX } from "../components/SlideAnimateX"
import FadeIn from "../components/FadeIn"
import FadeOut from "../components/FadeOut"
import ScrollBar from "../components/ScrollBar"

const WILL = () => {
  return <>
    <section className="will_section">
      <FadeOut y={0.06} y2={0.12}>
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

      <FadeOut y={0.2} y2={0.26}>
        <FadeIn y={0.08} y2={0.12}>
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

      <FadeOut y={0.32} y2={0.4}>
        <FadeIn y={0.24} y2={0.28}>
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

      <FadeOut y={0.38} y2={0.44}>
        <FadeIn y={0.26} y2={0.3}>
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

      <FadeOut y={0.54} y2={0.68}>
        <FadeIn y={0.44} y2={0.48}>
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
            <div className="will_text-img_container">
              <div className="will_design-option_container">
                <p className="text">
                  I created 4 different design options (options 1-4 starting from left to right) for my client to choose from before our next meeting.
                </p>
                <div className="will_option_container">
                  <img className="img_will_option" src={option1} alt="" />
                  <img className="img_will_option" src={option2} alt="" />
                  <img className="img_will_option" src={option3} alt="" />
                  <img className="img_will_option" src={option4} alt="" />
                </div>
                <p className="text">
                  Ultimately, the choice was option 2 (P.S. We went with a different color scheme instead of what’s represented in option 2).
                </p>
              </div>
              <div className="img_container">
                <p className="subtitle">INSPO</p>
                <img className="img_will" src={inspo1} alt="" />
                <img className="img_will" src={inspo2} alt="" />
                <img className="img_will" src={inspo3} alt="" />
              </div>
            </div>
          </div>
        </FadeIn>
      </FadeOut>

      <FadeOut y={0.82} y2={0.86}>
        <FadeIn y={0.66} y2={0.7}>
          <div className="will_journey_container">
            <div className="box_container">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="journey_text_img">
              <div className="journey_text">
                <div className="will_subtitle_container">
                  <h2 className="subtitle">The User Journey</h2>
                </div>
                <p className="text">
                  Time to figure out the <span className="will_span">WHO:</span> The users that will be visiting the site.
                  I summarized it to 3 types of people: <span className="will_span">Donors</span>, <span className="will_span">Volunteers</span> and <span className="will_span">Parents</span>. With these in consideration, I had to map a visual idea as to how these kinds of users may navigate around the site so my clients can understand.
                </p>
                <p className="text">
                  The main focus behind establishing the journey is to ease the way of navigation towards what a user (depending on the type of user) wants.
                  It shouldn’t be convoluted or hidden but obvious and a low click count.
                </p>
              </div>
              <div className="journey_img">
                <img src={journey} alt="" />
              </div>
            </div>
          </div>
        </FadeIn>
      </FadeOut>

      <FadeIn y={0.86} y2={0.9}>
        <div className="will_res_conclude_container">
          <div className="will_results_container">
            <div className="will_res-title_container">
              <h1 className="title">THE RESULTS</h1>
              <p className="text">Finally the Final Stage!</p>
            </div>
            <div className="res_imgs-text_container">
              <div>
                <h2 className="subtitle">AFTER</h2>
                <div className="res_img_container">
                  {/* I want to add a carousel over here btwn the before and after */}
                  <img src={landingOpen} alt="" />
                  <img src={landing1} alt="" />
                  <img src={landing2} alt="" />
                </div>
              </div>
              <div className="res_text_container">
                <p className="sub_text">
                  From what was once a mess of information blasted at the user face is now streamlined to a much more in-your-face, lively and “active” as one colleague at WWTS stated.
                </p>
                <p className="sub_text">
                  They also mention how much they loved how appealing everything is now; how well the colors complement each other without it feeling too overwhelming while still maintaining the idea that this site is for people who want to get active.
                </p>
              </div>
            </div>
          </div>
          <div className="will_conclude_container">
            <h2 className="subtitle">The Conclusion</h2>
            <div className="will_conclude-text_container">
              <p className="text">
                I learned a lot from this experience, conducting meetings, discussing trade-offs per design, and really coming to an understanding of what the folks at WeWILLThruSports truly wanted.
              </p>
              <p className="text">
                I faced a slew of challenges, one in particular that stood out was the idea that my “favorite” design out of the bunch I created won’t always be picked.
                You have to learn how to make sacrifices for the sake of what best aligns with the client’s vision.
              </p>
              <p className="sub_text">
                <span className="will_span">Compromise</span> and <span className="will_span">empathy</span>  are the two key words I would use to define this entire journey.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
      <ScrollBar />
    </section>

  </>
}

export default WILL