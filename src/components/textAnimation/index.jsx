import { motion } from "framer-motion"
import BackBtn from "../BackBtn"

const fadeInAnimation = {
    hidden: {
        opacity: 0, y: 100,
    },
    show: {
        opacity: 1, y: 0,
        transition: {
            duration: 1.5,
            staggerChildren: .3,
        }
    },
}

const TextAnimation = () => {
    return (
        <div className="grid place-items-center h-screen bg-[#1a202c] text-white">
            <BackBtn />

            <motion.div
                variants={fadeInAnimation}
                initial='hidden'
                animate='show'
                className="flex justify-center text-center flex-col gap-4"
            >

                <motion.p variants={fadeInAnimation}>
                    MONITOR. ALERT. AI DIAGNOSTICS REPORT.
                </motion.p>

                <motion.h1
                    variants={fadeInAnimation}
                    className="linear__text__gradient text-4xl font-extrabold leading-10 tracking-tight  sm:text-6xl sm:leading-none md:text-8xl"
                >
                    Get downtime <br />
                    AI Diagnostics to help you <br />
                    build better apps
                </motion.h1>

                <motion.p
                    variants={fadeInAnimation}
                    className="text-base text-gray-500 md:text-lg"
                >
                    Join the mailing list for early access to the alpha release
                </motion.p>

            </motion.div>

        </div>
    )
}

export default TextAnimation