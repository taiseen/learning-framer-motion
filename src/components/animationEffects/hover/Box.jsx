import { gridVariants } from "./BoxContainer";
import { motion } from "framer-motion";
import { useState } from "react";

const Box = ({ obj }) => {

    // for particular effect into child object/item...
    // then set useState() at here -> this child level component...
    const [isHover, setIsHover] = useState(false);

    const hoverEffectCat = {
        hidden: {
            y: -100, scaleX: .5, opacity: 0
        },
        show: {
            y: 0, scaleX: 1, opacity: 1,

            transition: {
                type: 'spring',
                stiffness: 200, // higher value - fasted jumping...
                damping: 10, // higher value - speed become slow...
            }
        }
    }

    const hoverEffectP = {
        ...hoverEffectCat,
        hidden: {
            ...hoverEffectCat.hover,
            y: 100,
        },
    }

    // 🟩🟩🟩 local || small size of images animated faster... 🟩🟩🟩
    const imgUrl = `https://i.ibb.co/${obj.imgUrl}.jpg`;

    return (
        <motion.div
            key={obj.id}
            variants={gridVariants}
            onHoverEnd={() => setIsHover(false)}
            onHoverStart={() => setIsHover(true)}
            className="relative cursor-pointer h-96 overflow-hidden rounded-sm border border-slate-600/20 shadow-xl"
        >

            {/* 🟩🟩🟩 local || small size of images animated faster... 🟩🟩🟩 */}
            <img src={imgUrl} alt={obj.title} className="object-cover" />

            <div
                className="w-[calc(100%-1rem)] h-[calc(100%-1rem)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm flex flex-col justify-between"
            >

                <motion.div
                    initial='hidden'
                    variants={hoverEffectCat}
                    animate={isHover ? 'show' : 'hidden'}
                    className="self-end flex gap-1"
                >
                    {
                        obj.category.map(cat => (
                            <span
                                key={cat}
                                className="rounded-full px-2 py-1 bg-slate-700 text-white"
                            >
                                {cat}
                            </span>
                        ))
                    }
                </motion.div>

                <motion.p
                    initial='hidden'
                    variants={hoverEffectP}
                    animate={isHover ? 'show' : 'hidden'}
                    className="bg-slate-700 text-white rounded-full p-1 text-center text-lg"
                >
                    {obj.title}
                </motion.p>

            </div>

        </motion.div>
    )
}

export default Box