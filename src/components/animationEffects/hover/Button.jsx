import { motion } from "framer-motion"

const Button = ({ text, handleToggle }) => {

    return (
        <motion.button
            onClick={handleToggle}
            className="my-4 px-3 py-2 rounded-sm bg-fuchsia-600 text-white text-[clamp(1.5rem,3vm,3.5rme)]"
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
            {text}
        </motion.button>
    )
}

export default Button