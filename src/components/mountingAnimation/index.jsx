import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// 🛑 3/June/2024

const MountingAnimation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [internalState, setInternalState] = useState(null);

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 mx-auto w-1/2 p-4 bg-slate-500/50 rounded-sm flex flex-col gap-4">

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="p-4 w-1/2 rounded-sm bg-green-600 cursor-pointer space-y-3"
                        initial={{ scale: 0, transformOrigin: 'bottom left' }}
                        animate={{ scale: 1, transformOrigin: 'bottom left' }}
                        exit={{ scale: 0, transformOrigin: 'bottom left' }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsOpen(prev => !prev)}
                    >
                        <p className="p-2 border rounded-sm">local state persist - <span className="text-xl font-semibold">{internalState}</span></p>

                        <p
                            className="p-2 border w-fit cursor-pointer rounded-sm"
                            onClick={(e) => {
                                e.stopPropagation();
                                setInternalState(pre => pre === 'Hello' ? 'Hi' : 'Hello')
                            }}
                        >
                            Update State
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <p
                className="p-2 rounded-sm cursor-pointer border border-slate-800 w-fit text-xl"
                onClick={() => setIsOpen(prev => !prev)}
            >
                Click to -
                <span className="font-bold text-red-800 text-2xl">{isOpen ? " Close || Unmount " : ' Open || Mount '}</span>
                - with Animation
            </p>

            <p className="text-2xl"> &lt;Component&gt; Mount & Unmount with animation effects...</p>

            <p className="text-2xl">by this effect observe inner component state...</p>
        </div>
    );
}

export default MountingAnimation;
