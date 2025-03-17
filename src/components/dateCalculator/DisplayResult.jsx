import { AnimatePresence, motion } from 'framer-motion'
import { resultVariants } from './constants/data'


const DisplayResult = ({ result, isResultVisible, darkMode, number }) => {

    return (
        <AnimatePresence mode="wait">
            {result && isResultVisible && (
                <motion.div
                    key={result}
                    variants={resultVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className={`p-4 rounded-lg 
                        ${darkMode
                            ? 'bg-gray-800 text-slate-300'
                            : 'bg-purple-200 text-purple-900'
                        }`}
                    >
                        <p className="text-lg font-medium">
                            {
                                result.includes('Please')
                                    ? result
                                    : `${number.startsWith('-') ? 'Past' : 'Future'} Date: ${result}`
                            }
                        </p>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default DisplayResult