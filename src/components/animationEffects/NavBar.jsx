import { motion } from "framer-motion"
import Button from "./hover/Button"

const NavBar = ({ handleToggle }) => {

    const navVariants = {
        hidden: {
            opacity: 0, scaleX: 0, filter: "blur(10px)", y: -200
        },
        visible: {
            opacity: 1, scaleX: 1, filter: "blur(0px)", y: 0,

            transition: {
                type: "spring",
                stiffness: 80,
                damping: 8,
                delay: .5,
            },
        },
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className="flex justify-end"
        >

            <Button text='Click me' handleToggle={handleToggle} />

        </motion.nav>
    )
}

export default NavBar