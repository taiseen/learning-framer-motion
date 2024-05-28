import { motion } from "framer-motion";
import { data } from "../data";
import Box from "../hover/Box";

const DemoEmptyBoxHolder = () => {

    const portfolioVariants = {
        hidden: {
            opacity: 0, scaleY: 0.3, filter: "blur(10px)", x: -300,
        },
        visible: {
            opacity: 1, scaleY: 1, filter: "blur(0px)", x: 0,

            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.5,
            },
        },
    };

    return (
        <motion.div
            variants={portfolioVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: .2 }}
            className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4 my-8 p-2 border border-slate-600/40 rounded"
        >
            {
                data.slice(4).map(obj => <Box key={obj.id} obj={obj} />)
            }
        </motion.div>
    )
}

export default DemoEmptyBoxHolder