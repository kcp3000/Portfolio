import { motion } from "motion/react"


const AppearText = ({ children, dur }) => {

    // const [isLoading, setIsLoading] = useState(false)
    // const {scrollYProgress} = useScroll();

    // useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    //     if (latest === 0) {
    //         setIsLoading(true);
    //     };
    // });

    return (
        <div>
            <motion.div
                initial={{
                    opacity: "0%",
                }}
                animate={{
                    opacity: "100%"
                }}
                transition={{
                    delay: 2,
                    duration: dur,
                    ease: 'easeIn'
                }}
            >
                {children}
            </motion.div>

        </div>

    )
}

export default AppearText