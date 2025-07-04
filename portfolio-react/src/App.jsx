import { Section1 } from "./sections/section1"
import { Section2 } from "./sections/section2"
import { Section3 } from "./sections/section3"
import SmoothScroll from "./components/Smooth_Scroll"
import NavBar from "./components/NavBar"
import FadeOut from "./components/FadeOut"


function App() {



  return (
    <div>
      <SmoothScroll>
        <NavBar />
      <main>
        <FadeOut y={0.35} y2={0.45}>
          <div className="section1">
            <Section1 />
          </div>
        </FadeOut>
        <FadeOut y={0.6} y2={0.75}>
          <div className="section2">
            <Section2 />
          </div>
        </FadeOut>

        <div className="section3">
          <Section3 />
        </div>
      </main>
      </SmoothScroll>

    </div>

  )
}

export default App
