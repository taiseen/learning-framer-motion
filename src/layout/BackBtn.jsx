import { Link } from "react-router-dom";

const BackBtn = () => {
    return (
        <Link
            to='/'
            className="fixed top-0 left-0 p-2 px-2 py-1 rounded cursor-pointer duration-200 hover:bg-white hover:text-black text-red-500 font-bold z-[9999999999999999999999999999999999999999]"
        >
            Back
        </Link>
    )
}

export default BackBtn