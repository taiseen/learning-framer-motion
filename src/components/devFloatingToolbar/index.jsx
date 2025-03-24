import ToggleBtn from "../toggleBtn/ToggleBtn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
    MessageSquare,
    MousePointer2,
    Sparkles,
    PenTool,
    FilePen,
    Square,
    Frame,
    Ruler,
    Type,
} from "lucide-react";

const DevFloatingToolbar = () => {

    const [isDevToolbar, setIsDevToolbar] = useState(false);

    return (
        <div className="min-h-screen flex flex-col gap-2 items-center justify-center p-24 bg-sky-300">
            <div className="w-fit">
                <AnimatePresence mode="popLayout" initial={false}>
                    {
                        isDevToolbar
                            ? <motion.h1
                                layout
                                key="dev-toolbarText"
                                className="text-2xl w-36"
                                initial={{ y: 100 }}
                                animate={{ y: 0, }}
                                exit={{ y: 100, opacity: 0 }}
                                transition={{ type: "spring", bounce: 0 }}
                            >
                                Dev Toolbar
                            </motion.h1 >
                            : <motion.h1
                                layout
                                key="design-toolbarText"
                                className="text-2xl"
                                initial={{ y: -100 }}
                                animate={{ y: 0 }}
                                exit={{ y: -100, opacity: 0 }}
                                transition={{ type: "spring", bounce: 0 }}
                            >
                                Design Toolbar
                            </motion.h1>
                    }
                </AnimatePresence>
            </div>

            <motion.div
                layout
                className="relative px-3 py-2 bg-neutral-50 rounded-md flex gap-3 items-center shadow-md overflow-hidden"
            >
                <AnimatePresence mode="popLayout" initial={false}>
                    {isDevToolbar ? (
                        <motion.div
                            layout
                            key="dev-toolbar"
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            exit={{ y: 100 }}
                            transition={{ type: "spring", bounce: 0 }}
                            className="flex gap-6 items-center"
                        >
                            <MousePointer2 />
                            <Ruler />
                            <FilePen />
                            <MessageSquare />
                        </motion.div>
                    ) : (
                        <motion.div
                            layout
                            key="design-toolbar"
                            initial={{ y: -100 }}
                            animate={{ y: 0 }}
                            exit={{ y: -100 }}
                            transition={{ type: "spring", bounce: 0 }}
                            className="flex gap-6 items-center"
                        >
                            <MousePointer2 />
                            <Frame />
                            <Square />
                            <PenTool />
                            <Type />
                            <MessageSquare />
                            <Sparkles />
                        </motion.div>
                    )}
                </AnimatePresence>


                <motion.div
                    layout
                    className="w-0.5 self-stretch bg-neutral-400 -my-2"
                />


                <motion.div
                    layout
                    className="flex items-center"
                >
                    <ToggleBtn
                        isChecked={isDevToolbar}
                        onChange={() => setIsDevToolbar(!isDevToolbar)}
                    />
                </motion.div>

            </motion.div>
        </div>
    )
}

export default DevFloatingToolbar