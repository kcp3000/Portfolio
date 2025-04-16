import { Section1 } from "./sections/section1"
import { Section2 } from "./sections/section2"
import { Section3 } from "./sections/section3"

function App() {

  return (
    <main>
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
  )
}

export default App
