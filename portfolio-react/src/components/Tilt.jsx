import  { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import Leon from "../images/Leon_Joseph_Florentin_Bonnat_-_The_Martyrdom_of_St_Denis_(mural)_-_(MeisterDrucke-90283).jpg"

const Tilt = () => {
  return (
    <div>
      <TiltingCard />
    </div>
  );
};

const ROTATION_RANGE = 25;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

function TiltingCard () {
    const ref = useRef(null); 

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);

        console.log({rX, rY})
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
                position: "relative",
            }}
        >
             <img src={Leon} className="painting" alt="Leon_Joseph_Florentin_Bonnat_-_The_Martyrdom_of_St_Denis_(mural)_-_(MeisterDrucke-90283)" />
        </motion.div>
    )
}

export default Tilt