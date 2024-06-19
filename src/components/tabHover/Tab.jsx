import { useRef } from 'react';

const Tab = ({ title, setPosition }) => {

    const liRef = useRef(null);


    const handelMouseEnter = () => {
        if (!liRef.current) return false;

        const { offsetLeft, offsetHeight } = liRef.current;

        const { width } = liRef.current.getBoundingClientRect();

        setPosition({
            width,
            height: offsetHeight,
            left: offsetLeft,
            opacity: 1,
        });
    }

    return (
        <li
            ref={liRef}
            onMouseEnter={handelMouseEnter}
            className="relative z-10 block cursor-pointer px-3 py-2 text-white mix-blend-difference text-xl"
        >
            {title}
        </li>
    )
}

export default Tab