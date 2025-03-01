import { Link } from "react-router-dom";
import { navItems } from "./data";
import NavbarMobile from "./NavbarMobile";


const NavbarDesktop = () => {

    return (
        <nav className="flex justify-between items-center p-8">

            <h1 className="font-bold text-2xl">Logo</h1>

            <ul className="hidden sm:flex gap-6">
                {
                    navItems.map(({ label }) => (
                        <Link href="/" key={label}>
                            <li>{label}</li>
                        </Link>
                    ))
                }
            </ul>


            <NavbarMobile />

        </nav>
    );
};

export default NavbarDesktop;