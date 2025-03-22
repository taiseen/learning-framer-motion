import { motion } from "framer-motion";

const base = 4;
const time = d => d * base;

const ListItem = ({ children }) => {
    return (
        <motion.li
            className="relative"
            initial={{ height: 0, opacity: 0, marginBottom: 0 }}
            animate={{
                marginBottom: 4, // equivalent to gap-1
                height: "auto",
                opacity: 1,
                transition: {
                    type: "spring",
                    bounce: 0.3,
                    opacity: { delay: time(0.025) },
                },
            }}
            exit={{ height: 0, opacity: 0, marginBottom: 0 }}
            transition={{
                duration: time(0.15),
                type: "spring",
                bounce: 0,
                opacity: { duration: time(0.03) },
            }}
        >
            {children}
        </motion.li>
    );
};

export default ListItem;