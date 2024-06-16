import { Link } from "react-router-dom";

const BackBtn = () => {
    return (
        <Link
            to='/'
            className="fixed top-0 left-0 p-2 px-2 py-1 rounded cursor-pointer duration-200 hover:bg-white hover:text-black z-20 text-red-500 font-bold"
        >
            Back
        </Link>
    )
}

export default BackBtn