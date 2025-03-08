import { motion } from "framer-motion";

const PopupMenu = ({ isPopupMenuOpen, handleToggle }) => {

    const menuVariants = {
        hidden: {
            x: 500, scaleX: 0.5, scaleY: 0.2,

            transition: {
                type: "ease",
                stiffness: 200,
                damping: 30,
            },

            transitionEnd: {
                display: "none", // Set display to "none" after the transition
            },
        },

        visible: {
            x: 0, scaleX: 1, scaleY: 1, opacity: 1, display: "block", // Set display to "block" when visible

            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            variants={menuVariants}
            animate={isPopupMenuOpen ? "visible" : "hidden"}
            className='fixed top-2 right-2 w-96 h-32 z-30 shadow-xl rounded-sm bg-green-600 p-2'
        >

            <p className="text-xl">Hello</p>

            <motion.button
                onClick={handleToggle}
                className="absolute top-1 right-1 px-2 py-1 bg-red-100 rounded-sm"
                whileHover={{ scale: 1.1 }}
                transition={{
                    duration: .2,
                    ease: [0, .71, .2, 1.01],
                    scale: {
                        type: 'spring',
                        damping: 6,
                        stiffness: 100,
                        restDelta: 0.001,
                    }
                }}
            >
                Close!
            </motion.button>

        </motion.div >
    )
}

export default PopupMenu