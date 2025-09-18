import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const SmoothScroll = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialScrollDone, setInitialScrollDone] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  //getting height info
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current != null) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  //intercept normal scroll behavior
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 30,
    restDeltaL: 0.01,
  });

  useEffect(() => {
    if (windowHeight > 0 && contentHeight > 0) {
      setIsLoading(false);
      window.scrollTo(0, 0);
      setInitialScrollDone(true);
    }
    console.log(`win height: ${windowHeight}. content height: ${contentHeight}`)
  }, [windowHeight, contentHeight]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0) {
      setHasScrolled(true);
    }
  });

  const y = useTransform(smoothProgress, (value) => {
    if (!initialScrollDone || !hasScrolled) return 0;
    return value * -(contentHeight - windowHeight);
  });

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        className="scrolling"
        ref={contentRef}
        style={{
          y: isLoading ? 0 : y,
          opacity: isLoading ? 0 : 1,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          willChange: "transform",
        }}>
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
