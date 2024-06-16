import { motion } from "framer-motion";

const articles = [
    { id: 1, title: "Html", disc: "Structure of website" },
    { id: 2, title: "CSS", disc: "Style of website" },
    { id: 3, title: "JavaScript", disc: "Interaction of website" },
    { id: 4, title: "React", disc: "Component based UI library" },
    { id: 5, title: "Redux", disc: "Frontend store management system" },
    { id: 6, title: "TailwindCss", disc: "Awesome css library" },
]

const StaggeredAnimation = () => {
    return (
        <div className='m-8 py-1 flex flex-wrap justify-evenly rounded bg-slate-300'>

            {
                articles.map((article, idx) => (
                    <motion.div
                        key={article.id}
                        className='w-52 h-52 m-2 p-2 rounded bg-[#a2a] text-white flex flex-col items-center justify-center text-center'
                        initial={{ opacity: 0, translateX: -200, translateY: -200 }}
                        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                        transition={{ duration: .4, delay: .2 * idx }}
                    >
                        <h2 className="text-xl font-bold">{article.title}</h2>
                        <p>{article.disc}</p>
                    </motion.div>
                ))
            }
        </div>
    )
}

export default StaggeredAnimation
