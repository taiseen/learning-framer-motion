import { motion, useMotionTemplate } from "framer-motion";
import { FiArrowRight } from "react-icons/fi"

const Content = ({ color }) => {

    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <div className="relative flex flex-col items-center z-10">

            <span className="mb-2 inline-block rounded-full px-3 py-2 text-sm bg-gray-600/60">
                Better Now Live!
            </span>

            <h1 className="max-w-3xl bg-linear-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
                Decrease your SaaS churn by over 90%
            </h1>

            <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et, distinctio eum mpedit nihil ipsum modi.
            </p>

            <motion.button
                style={{ border, boxShadow }}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="group relative w-fit flex items-center gap-2 rounded-full px-4 py-2 text-gray-50 bg-gray-950/10 transition-colors hover:bg-gray-950/50"
            >
                Start free trial

                <FiArrowRight className='transition-transform group-hover:-rotate-45 group-active:-rotate-12' />
            </motion.button>
        </div>
    )
}

export default Content