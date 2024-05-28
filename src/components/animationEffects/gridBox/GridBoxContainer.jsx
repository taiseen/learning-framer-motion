import { motion } from "framer-motion";
import { data } from "../data";
import { useState } from "react";

const GridBoxContainer = () => {

    const [demoData] = useState(data.slice(3));

    const parentVariant = {
        hidden: {
            opacity: 0, scale: 0, filter: "blur(10px)"
        },
        visible: {
            opacity: 1, scale: 1, filter: "blur(0px)",

            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    };

    const childVariant = {
        hidden: {
            opacity: 0, scale: 0.3, filter: "blur(10px)"
        },
        visible: {
            opacity: 1, scale: 1, filter: "blur(0px)",

            transition: {
                type: 'spring',
                stiffness: 200, // higher value - fasted jumping...
                damping: 10, // higher value - speed become slow...
            },
        },
    };

    return (
        <motion.div
            className="h-[480px] grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4 grid-flow-dense my-4"
            variants={parentVariant}
            initial='hidden'
            // animate='visible'
            whileInView="visible"
            viewport={{ once: true, amount: .2 }}
        >
            {
                demoData.map((obj, index) =>

                    <motion.div
                        key={obj.id}
                        className={`${index === 0 ? 'col-span-2 row-span-2' : ''} `}
                        variants={childVariant}
                    >

                        <div className="max-h-full h-full bg-slate-500 rounded flex items-center justify-center">
                            <span className="text-2xl">{obj.title}</span>
                        </div>

                    </motion.div>
                )
            }
        </motion.div>
    )
}

export default GridBoxContainer