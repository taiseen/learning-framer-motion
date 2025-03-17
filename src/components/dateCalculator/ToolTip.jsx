import { AnimatePresence, motion } from 'framer-motion'
import { tooltipVariants } from './constants/data'
import { HelpCircle } from 'lucide-react'

const ToolTip = ({ darkMode, showTooltip }) => {

    return (
        <AnimatePresence>
            {showTooltip && (
                <motion.div
                    className="absolute left-80 top-4 w-80 z-20"
                    variants={tooltipVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <div className={`p-6 rounded-2xl backdrop-blur-sm shadow-2xl 
                        ${darkMode
                            ? 'bg-gray-800/80 text-gray-200'
                            : 'bg-white/80 text-gray-800 '
                        }`
                    }>

                        <div className="flex items-center mb-4">
                            <HelpCircle className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'} mr-2`} />
                            <h3 className="font-semibold">How to use</h3>
                        </div>

                        <TooltipContent />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ToolTip



// Tooltip content component for better organization
const TooltipContent = () => (
    <div className="space-y-3">
        <p className="text-sm leading-relaxed">
            Enter a positive or negative number to calculate a future or past date.
        </p>
        <div className="space-y-2">
            <div className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <p className="text-sm">Enter &quot;7&quot; for a date 7 days ahead</p>
            </div>

            <div className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <p className="text-sm">Enter &quot;-3&quot; for a date 3 days ago</p>
            </div>

            <div className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <p className="text-sm">Choose between days, months, or years</p>
            </div>
        </div>
    </div>
);