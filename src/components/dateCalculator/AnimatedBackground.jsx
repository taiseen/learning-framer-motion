import { backgroundBlobVariants } from "./constants/data";
import { motion } from 'framer-motion'

// Background animation component
const AnimatedBackground = ({ darkMode }) => (

    <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
            variants={backgroundBlobVariants}
            animate="animate"
            className={`absolute top-0 left-0 w-96 h-96 rounded-full filter blur-3xl opacity-20 
            ${darkMode ? 'bg-purple-700' : 'bg-purple-400'}`}
        />

        <motion.div
            variants={backgroundBlobVariants}
            animate="animate"
            transition={{ delay: 2 }}
            className={`absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-20 
            ${darkMode ? 'bg-blue-700' : 'bg-blue-400'}`}
        />

        <motion.div
            variants={backgroundBlobVariants}
            animate="animate"
            transition={{ delay: 4 }}
            className={`absolute bottom-0 left-1/2 w-96 h-96 rounded-full filter blur-3xl opacity-20 
            ${darkMode ? 'bg-pink-700' : 'bg-pink-400'}`}
        />
    </div>
);

export default AnimatedBackground;