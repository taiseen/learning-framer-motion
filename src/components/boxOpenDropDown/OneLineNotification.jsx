import { motion } from "framer-motion";

const OneLineNotification = () => {

    return (
        <motion.div
            initial={{ y: 0, opacity: 0, height: 0 }}
            animate={{ y: 1, opacity: 1, height: "auto" }}
            exit={{ y: 0, opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
        >
            One Line Notification, Summary of what happened in the backend
        </motion.div>
    )
}

export default OneLineNotification