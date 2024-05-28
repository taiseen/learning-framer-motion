import { motion, useTransform, useScroll } from "framer-motion";
import ImgDemo from '../img/demo.jpg';
import { useRef } from 'react';

const ScreenScroll = () => {
    const headerRef = useRef(null);

    const gradients = [
        "linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236))",
        "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
        "linear-gradient(140deg, rgb(89, 212, 153), rgb(160, 135, 45))",
        "linear-gradient(140deg, rgb(89, 212, 153), rgb(160, 135, 45))",
        "linear-gradient(140deg, rgb(76, 200, 200), rgb(32, 32, 51))",
    ];

    const randomGradient = () => gradients[Math.floor(Math.random() * gradients.length)];

    //scroll animations
    const scrollYProgress = useScroll({
        target: headerRef,
        offset: ["start end", "end start"],
    }).scrollYProgress;

    const x = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, -2400]); // img move to left side -2400px for hide
    const y = useTransform(scrollYProgress, [0, 0.75, 1], [0, 0, -900]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.3, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.85, 0.95], [1, 1, 0]);

    const imgVariant = {
        offScreen: {
            y: 300, opacity: 0, scaleY: 0.2
        },
        onScreen: {
            y: 0, opacity: 1, scaleY: 1,

            transition: {
                type: "spring",
                bounce: 0.45,
                duration: 0.8,
            },
        },
    };

    return (
        <div>
            <motion.header
                ref={headerRef}
                className='relative w-full min-h-[120vh]'
                style={{ background: randomGradient() }}
            >
                <motion.img
                    src={ImgDemo}
                    alt="demo"
                    initial="offScreen"
                    variants={imgVariant}
                    whileInView="onScreen"
                    viewport={{ once: true, amount: 0 }}
                    style={{ x, y, scale, opacity, translateX: "-50%" }}
                    className='absolute top-[10%] left-1/2 -translate-x-1/2 w-[40%]'
                />
            </motion.header>
        </div>
    )
}

export default ScreenScroll