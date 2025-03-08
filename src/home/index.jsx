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

    const monthColors = {
        'January': 'bg-[#4DB6AC]',
        'February': 'bg-[#64B5F6]',
        'March': 'bg-[#A5D6A7]',
        'April': 'bg-[#81D4FA]',
        'May': 'bg-[#9FA8DA]',
        'June': 'bg-[#F0AAAA]',
        'July': 'bg-[#4DB6AC]',
        'August': 'bg-[#64B5F6]',
        'September': 'bg-[#A5D6A7]',
        'October': 'bg-[#81D4FA]',
        'November': 'bg-[#9FA8DA]',
        'December': 'bg-[#F0AAAA]',
        'Missing': 'bg-red-500', // if date is missing...
    };

    return (
        <div className={`h-screen p-4 bg-gray-500 overflow-y-auto text-white`}>

            <h2 className="text-center text-2xl md:text-4xl my-4">
                Framer-motion mini-projects... | Total: {routes.length}
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
                    routes.map(obj => {

                        const { path, title, date } = obj;

                        const bgColorClass = monthColors[date?.split('-')[1] || 'Missing'];

                        return (
                            <motion.div
                                key={path}
                                variants={childVariant}
                                className={`relative w-80 h-56 border-2 border-slate-700 rounded-md grow duration-300 ${bgColorClass} hover:border-red-700 group`}
                            >
                                <p className="absolute top-0 left-1.5 text-gray-500 font-semibold duration-300 group-hover:text-red-700">
                                    {date || 'N/A'}
                                </p>

                                <Link
                                    to={path}
                                    className="w-full h-full text-xl md:text-2xl flex justify-center items-center text-black group-hover:text-red-700 duration-300 "
                                >
                                    {title}
                                </Link>
                            </motion.div>
                        )
                    }).reverse()
                }
            </motion.div>
        </div>
    )
}

export default Home;