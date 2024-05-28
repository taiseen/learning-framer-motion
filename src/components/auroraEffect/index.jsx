import { motion, animate, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

import ThreeJsCanvas from "./ThreeJsCanvas";
import BackBtn from "../BackBtn";
import Content from "./Content";

const colors = ['#DD335C', '#13FFAA', '#1E67C6', '#CE84CF'];

const AuroraEffect = () => {

    const color = useMotionValue(colors[0]);

    const backgroundImage = useMotionTemplate`radial-gradient(
        125% 125% at 50% 0%, 
        #020617 50%,
        ${color}
    )`;

    useEffect(() => {
        const animationProp = {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror',
        }

        // color animation start...
        animate(color, colors, animationProp);
    }, [color]);

    return (
        <>
            <BackBtn />
            <motion.section
                style={{ backgroundImage }}
                className="relative min-h-screen grid place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-300"
            >

                <Content color={color} />

                <ThreeJsCanvas />

            </motion.section>
        </>
    )
}

export default AuroraEffect