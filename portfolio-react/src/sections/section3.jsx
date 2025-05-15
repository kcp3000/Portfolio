import { SlideAnimate } from "../components/SlideAnimate"

export function Section3() {
  return (
    <div className="section3_container">
      <section className="grid_container3">
        <SlideAnimate delay={0.25}>
          <h1>PROJECTS</h1>
        </SlideAnimate>
        <SlideAnimate delay={0.5}>
          <a href="https://kcp3000.github.io/Y2K/" className="link">
            <p className="block"></p>
          </a>
        </SlideAnimate>
        
        <SlideAnimate delay={0.7}>
          <a href="https://ascentak.github.io/Project-Ascent/" className="link">
            <p className="block"></p>
          </a>
        </SlideAnimate>
        <SlideAnimate delay={0.9}>
          <a href="https://waste-wise.onrender.com/" className="link">
            <p className="block"></p>
          </a>
        </SlideAnimate>
        <SlideAnimate delay={0.6}>
          <h1 className="y2k">Y2K</h1>
        </SlideAnimate>
        <SlideAnimate delay={0.8}>
          <h1>ASCENT</h1>
        </SlideAnimate>
        <SlideAnimate delay={[1]}>
          <h1>WASTE</h1>
        </SlideAnimate>
        
      </section>
    </div>
  )
}