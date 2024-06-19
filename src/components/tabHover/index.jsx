import { motion } from "framer-motion";
import { useState } from "react";
import { tabList } from "./data";
import Tab from "./Tab";


const Cursor = ({ position }) => (
    <motion.li
        animate={position}
        className="absolute z-0 rounded-full bg-slate-800"
    />
)

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const TabListContainer = () => {

    const [position, setPosition] = useState({ width: 0, height: 0, left: 0, opacity: 0 });

    const handelMouseLeave = () => setPosition(pre => ({ ...pre, opacity: 0 }));

    return (
        <ul
            onMouseLeave={handelMouseLeave}
            className="relative mx-auto w-fit mt-10 p-1 flex rounded-full border-2 border-violet-500 bg-white"
        >
            {
                tabList.map(title =>
                    <Tab
                        key={title}
                        title={title}
                        setPosition={setPosition}
                    />
                )
            }

            <Cursor position={position} />
        </ul>
    )
}

export default TabListContainer;