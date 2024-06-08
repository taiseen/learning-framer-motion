import { motion } from "framer-motion";

const Modal = ({ setIsModalOpen }) => {

    // 📝📝📝 Framer-motion NOTE:-
    // to applying motion-effect for [exit] attribute...
    // we need to wrap this container by ==> <AnimatePresence> ... </AnimatePresence>


    // for accessability we add these 2 attributes
    // 1) role="dialog"
    // 2) aria-modal="true"

    // 🚩 & most important thing is:-
    // its follow the react jsx dom tree, so all event's are available...
    // but in actual browser dom tree its add beside react root as a sibling...

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .3 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 bottom-0 left-0 right-0 bg-black/50"
            role="dialog"
            aria-modal="true"
        >

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                // transition={{ duration: .3 }}
                exit={{ scale: 0 }}
                className={`fixed top-0 bottom-0 left-0 right-0 m-auto 
                w-[800px] h-[500px] p-4 rounded shadow-xl bg-slate-100 `}
            >

                {/* 🔴 close button 🔴 */}
                <div
                    className="absolute top-2 right-2 size-7 rounded-full bg-red-300 cursor-pointer duration-300 hover:bg-red-400 z-10"
                    onClick={() => setIsModalOpen(false)}
                />

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 1, opacity: 1, transition: { duration: .3, delay: .2 } }}
                    exit={{ x: 100, opacity: 0, transition: { duration: .1, delay: 0 } }}
                >

                    <h2 className="text-4xl mb-4">Framer-motion animation effects...</h2>

                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima explicabo illum, numquam fuga quisquam dolorum, nisi voluptas aperiam deserunt, molestias consequatur magni quis adipisci? Cum illo, perspiciatis vel illum quasi earum ex incidunt totam nisi eaque praesentium velit qui maxime quas neque facilis. Nesciunt delectus impedit non itaque cum!</p>

                </motion.div>

            </motion.div>

        </motion.div>
    )
}

export default Modal