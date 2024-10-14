import { motion } from "framer-motion";

const MultiLineNotification = () => {

    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
        >
            <p>Multi Line Notification</p>

            <ul>
                <li>Demo 1</li>
                <li>Demo 2</li>
                <li>Demo 3</li>
                <li>Demo 4</li>
                <li>Demo 5</li>
            </ul>
        </motion.div>
    )
}

export default MultiLineNotification