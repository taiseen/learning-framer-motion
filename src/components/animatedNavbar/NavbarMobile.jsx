import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs"
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom"
import { navItems } from "./data"
import { useState } from "react"
import NavMobileBtn from "./NavMobileBtn"


const NavbarMobile = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative block sm:hidden">

            <NavMobileBtn
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />

            <AnimatePresence>
                {
                    isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}

                            // without this transition, the animation will be instant
                            transition={{ duration: .5, type: 'spring' }}

                            className="absolute -top-2 -right-2 w-64 min-h-64 bg-neutral-50 rounded-md p-8 flex flex-col z-10 shadow-lg drop-shadow-lg origin-top-right border">

                            <ul className="flex flex-col gap-2 flex-1" >
                                {
                                    navItems.map(({ label }) => (
                                        <Link href="/" key={label}>
                                            <li className="text-2xl font-medium">{label}</li>
                                        </Link>
                                    ))
                                }
                            </ul>

                            <div className="flex gap-4 mt-8">

                                <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                                    <BsGithub className="size-5" />
                                </a>

                                <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <BsFacebook className="size-5" />
                                </a>

                                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <BsTwitter className="size-5" />
                                </a>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default NavbarMobile