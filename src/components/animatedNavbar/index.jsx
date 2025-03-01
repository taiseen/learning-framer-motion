import NavbarDesktop from "./NavbarDesktop"

const AnimatedNavbar = () => {

    return (
        <main>
            <NavbarDesktop />

            <div className="min-h-screen flex flex-col items-center p-24">


                <h1 className="text-xl md:text-3xl font-semibold tracking-wide">
                    Make this page responsive to see the mobile navigation menu open/close effect
                </h1>

            </div>

        </main>
    )
}

export default AnimatedNavbar