import { Outlet, useLocation } from "react-router-dom"
import BackBtn from "./BackBtn"


const Layout = () => {

    const { pathname } = useLocation();
    const isRoot = pathname === '/';


    return (
        <div className="layout">

            {!isRoot && <BackBtn />}

            <Outlet />

        </div>
    )
}

export default Layout