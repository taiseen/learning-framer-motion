import { motion } from "framer-motion";
import { useState } from "react";


const ExpandableCard = () => {

    const [isExpand, setIsExpand] = useState(false);

    const animation = {
        layout: "position",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.3, ease: 'easeInOut' },
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-700">
            <motion.div
                layout
                className="py-2 px-4 rounded-md cursor-pointer w-96 bg-slate-300 text-slate-800"
            // onClick={() => setIsExpand(pre => !pre)}
            >
                <motion.h5
                    layout='position'
                    className="text-xl font-semibold mb-2 flex justify-between items-center">
                    Expandable Card

                    {
                        !isExpand &&
                        <span
                            className="text-sm text-slate-600 px-2 py-1 rounded-md bg-slate-100"
                            onClick={() => setIsExpand(pre => !pre)}
                        >
                            Open
                        </span>
                    }
                </motion.h5 >


                <motion.p
                    layout='position'
                    className="text-justify mb-2"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rerum
                    officia provident. Exercitationem corporis, officia optio deleniti
                    voluptatem ipsum quod woork aperiam magni. Perspiciatis, accusamus officia?
                </motion.p>


                {
                    isExpand && (
                        <motion.div {...animation}>
                            <img
                                className="w-full h-52 mb-2 rounded-md border-2 border-amber-600"
                                src="./green-mountain.jpg"
                                alt="demo image"
                            />

                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quia,
                                nihil odio alias numquam repellendus in dolorum repudiandae nostrum ad
                                dolorem quasi porro non ex a! Velit debitis odio nam!
                            </p>

                            <div className="flex items-center justify-end">
                                <button
                                    className="text-white font-semibold py-2 px-8 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 cursor-pointer shadow-lg drop-shadow-lg"
                                    onClick={() => setIsExpand(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    )
                }
            </motion.div >
        </div >
    );
}

export default ExpandableCard