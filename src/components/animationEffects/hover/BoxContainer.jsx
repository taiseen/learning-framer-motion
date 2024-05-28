import { motion } from "framer-motion";
import { data } from "../data";
import Box from "./Box";

export const gridVariants = {
    hidden: {
        opacity: 0, scale: 0, filter: "blur(2px)"
    },
    visible: {
        opacity: 1, scale: 1, filter: "blur(0px)",
        
        transition: {
            delayChildren: .2,
            staggerChildren: .1,
            // duration: .1,
        },
    },
};

const BoxContainer = () => {

    // never set useState() for single object/item from here (parent component),
    // if do then its effect for all child object/item,

    // so if need to effect particular child object/item...
    // then set useState() at that child level component

    // if intentionally want to effect all child at once...
    // then set useState() at here (parent component)


    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={gridVariants}
            className="grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-4 my-8 p-2 border border-slate-600/40 rounded"
        >
            {
                data.map(obj => <Box key={obj.id} obj={obj} />)
            }
        </motion.div>
    )
}

export default BoxContainer