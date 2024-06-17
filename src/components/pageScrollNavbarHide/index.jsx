import Content from "./Content"
import Navbar from "./Navbar"

const PageScrollNavbarHide = () => {

    return (
        <div className="relative bg-slate-900 text-white">
            <Navbar />

            <Content />
        </div>
    )
}

export default PageScrollNavbarHide