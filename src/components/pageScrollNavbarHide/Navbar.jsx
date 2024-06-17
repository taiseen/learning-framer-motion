import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";


const Navbar = () => {

    const { scrollY } = useScroll();

    const [isNavbarShow, setIsNavbarShow] = useState(false);


    // 📝📝📝 NOTE:-
    // if parent container use - overflow-y-auto
    // then this ==> useMotionValueEvent does not working...

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const preValue = scrollY.getPrevious();

        latest > preValue ? setIsNavbarShow(true) : setIsNavbarShow(false);
    });


    return (
        <motion.nav
            variants={{
                hide: { y: '-100%' },
                show: { y: 0 }
            }}
            animate={isNavbarShow ? 'hide' : 'show'}
            transition={{ duration: .35, ease: 'easeInOut' }}

            className="sticky top-0 p-4 flex items-center justify-between gap-2 cursor-pointer w-full bg-slate-800"
        >
            <div className="w-10 h-10 bg-gray-500 rounded" />

            <ul className="flex items-center gap-6 text-xl">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
            </ul>

            <div className="px-4 py-2 rounded bg-emerald-300 text-black">
                Try Free
            </div>
        </motion.nav>
    );
};

export default Navbar;
