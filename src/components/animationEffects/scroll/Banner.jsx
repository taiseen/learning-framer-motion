import { motion } from "framer-motion";
import Button from "../hover/Button"

const Banner = ({ handleToggle }) => {

    const bannerVariants = {
        offScreen: {
            y: 300, opacity: 0, scaleY: .2
        },
        onScreen: {
            y: 0, opacity: 1, scaleY: 1,

            transition: {
                type: "spring",
                bounce: .45,
                duration: .8,
            },
        },
    };

    return (
        <motion.div
            variants={bannerVariants}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true, amount: .1 }}
            className={`relative p-10 text-6xl rounded text-balance 
            bg-[radial-gradient(80.97%_80.37%_at_56.01%_19.03%,#9759F5_0%,#7263F3_99.23%)] 
            after:absolute 
            after:content-[''] 
            after:-bottom-4 
            after:left-0 
            after:w-full 
            after:h-2 
            after:rounded-sm
            after:bg-[linear-gradient(to_right,#FF11FF,#6366f1)] 
            `}
        >
            <p className="mb-8">
                Interested in
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative mx-2">
                    <span className="relative text-white">working</span>
                </span>
                with me on your next project? Send me an email or schedule a meeting.
            </p>

            <Button text='Contact with me' handleToggle={handleToggle} />

        </motion.div>
    )
}

export default Banner