import { AnimatePresence } from "framer-motion"; // use it for applying - exit - motion effect 
import { useEffect, useState } from "react";
import ModalPortal from "./ModalPortal";
import Modal from "./Modal";


const ModalOpeningAnimation = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setIsModalOpen(true);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);


    return (
        <div className="p-4 min-h-screen bg-gray-300">

            <button
                onClick={() => setIsModalOpen(true)}
                className="ml-10 mt-10 px-4 py-2 rounded-sm outline-hidden text-2xl bg-fuchsia-400 font-bold duration-300 hover:bg-fuchsia-500"
            >
                Open Modal
            </button>


            {/* 📝 NOTE:- use it for applying - [exit] - motion effect */}
            <AnimatePresence>
                {
                    isModalOpen &&
                    <ModalPortal>
                        <Modal setIsModalOpen={setIsModalOpen} />
                    </ModalPortal>
                }
            </AnimatePresence>

        </div>
    )
}

export default ModalOpeningAnimation