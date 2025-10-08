import Section1 from "../sections/section1"
import Section2 from "../sections/section2"
import Section3 from "../sections/section3"
import FadeOut from "../components/FadeOut"
import FadeIn from "../components/FadeIn"


function Home() {
  return (
    <div>
      <main>
        <FadeOut y={0.1} y2={0.25}>
          <div className="section1">
            <Section1 />
          </div>
        </FadeOut>
        <FadeOut y={0.55} y2={0.65}>
          <FadeIn y={0.1} y2={0.3}>
            <div className="section2">
              <Section2 />
            </div>
          </FadeIn>
        </FadeOut>
        <FadeIn y={0.7} y2={0.9}>
          <div className="section3">
            <Section3 />
          </div>
        </FadeIn>
      </main>
    </div>
  )
}

export default Home
