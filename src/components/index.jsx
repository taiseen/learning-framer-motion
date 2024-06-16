import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { routes } from "../routes"

const Home = () => {
    // const { pathname } = useLocation();
    // const isRoot = pathname === '/';
    // ${isRoot ? 'block' : 'hidden'}

    const parentVariant = {
        hidden: {
            opacity: 0, scale: 0,
        },
        visible: {
            opacity: 1, scale: 1,

            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    };

    const childVariant = {
        hidden: {
            opacity: 0, scale: 0.3,
        },
        visible: {
            opacity: 1, scale: 1,

            transition: {
                type: 'spring',
                stiffness: 200, // higher value - fasted jumping...
                damping: 10, // higher value - speed become slow...
            },
        },
    };

    // initial={{ opacity: 0, translateX: -100, translateY: -100 }}
    // animate={{ opacity: 1, translateX: 0, translateY: 0 }}
    // transition={{ duration: .4, delay: .2 * idx }}

    return (
        <div className={`h-screen p-4 bg-gray-600 text-gray-300 overflow-y-auto`}>

            <h2 className="text-center text-2xl md:text-3xl my-4">
                Framer-motion mini-projects... || Total: {routes.length}
            </h2>

            <p className="text-center">
                <a
                    className="text-sm duration-300 hover:text-emerald-400 hover:underline hover:underline-offset-4"
                    href="https://react-mini-pro.netlify.app"
                    rel="noreferrer"
                    target="_blank"
                >
                    React mini-projects
                </a>
            </p>

            <motion.div
                className="flex flex-wrap gap-4 items-center mt-8"
                variants={parentVariant}
                initial='hidden'
                // animate='visible'
                whileInView="visible"
                viewport={{ once: true, amount: .2 }}
            >
                {
                    routes.map(obj =>
                        <motion.div
                            key={obj.path}
                            variants={childVariant}
                            className="relative w-80 h-56 border border-slate-400 rounded flex-grow duration-300 hover:bg-slate-400/50"
                        >
                            <span className="absolute top-1 left-2 text-gray-400/50">{obj.date}</span>

                            <Link
                                to={obj.path}
                                className="w-full h-full text-xl md:text-2xl flex justify-center items-center"
                            >
                                {obj.title}
                            </Link>
                        </motion.div>
                    ).reverse()
                }
            </motion.div>
        </div>
    )
}

export default Home;