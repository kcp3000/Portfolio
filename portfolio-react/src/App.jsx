import { Section1 } from "./sections/section1"
import { Section2 } from "./sections/section2"
import { Section3 } from "./sections/section3"
import SmoothScroll from "./components/Smooth_Scroll"

function App() {

  return (
    <SmoothScroll>
      <main>
      <nav className="links">
          <a href="/">DELEON</a>
          <a href="/">PROJECTS</a>
          <a href="/">ABOUT</a>
          <p className="rectangle"></p>
          <p className="rectangle"></p>
          <p>NEW YORK, NY</p>
          <p>KEVINDELEON102022@GMAIL.COM</p>
      </nav>
      <div className="section1">
        <Section1 />
      </div>
      <div className="section2">
        <Section2 />
      </div>
      <div className="section3">
        <Section3 />
      </div>
    </main>
    </SmoothScroll>
    
  )
}

export default App
