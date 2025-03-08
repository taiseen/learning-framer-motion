import { motion, useSpring, useScroll } from "framer-motion";

function Progressbar() {

    const scrollYProgress = useScroll().scrollYProgress;

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 20,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 w-full h-1 rounded-sm origin-[0%] z-10 bg-green-500"
            style={{ scaleX }}
        ></motion.div>
    );
}

export default Progressbar;