import { motion } from "framer-motion";
import { useState } from "react";
import BackBtn from "../BackBtn";

const PopUpEffect = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <>
            <BackBtn />

            <div className="fixed bottom-2 right-1/2 translate-x-1/2 w-[600px] bg-gray-500 rounded p-2">

                <motion.div
                    className={`absolute bottom-14 left-0 p-2 bg-slate-400 rounded duration-300 flex flex-col gap-2`}
                    // origin-bottom-left ${isPopupOpen ? 'scale-100' : 'scale-0'}

                    initial={{ scale: 0, transformOrigin: 'bottom left' }}
                    animate={{ scale: isPopupOpen ? 1 : 0 }}
                    transition={{ duration: .001, type: "spring", bounce: .1, }}

                    onClick={() => setIsPopupOpen(pre => !pre)}
                >
                    <p className="px-2 py-1 bg-slate-100 rounded cursor-pointer">Option 1</p>
                    <p className="px-2 py-1 bg-slate-100 rounded cursor-pointer">Option 2</p>
                    <p className="px-2 py-1 bg-slate-100 rounded cursor-pointer">Option 3</p>
                    <p className="px-2 py-1 bg-slate-100 rounded cursor-pointer">Option 4</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="px-2 py-1 rounded bg-green-400 w-fit cursor-pointer select-none"
                    onClick={() => setIsPopupOpen(pre => !pre)}
                >
                    Click Effect
                </motion.div>

            </div>
        </>

    )
}

export default PopUpEffect