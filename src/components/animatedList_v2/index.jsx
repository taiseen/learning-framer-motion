import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

let x = 3;

const SimpleList = () => {
    const [items, setItems] = useState([1, 2, 3]);

    function addItem() {
        x++;
        setItems((items) => [...items, x]);
    }

    function removeItem(item) {
        setItems((items) => items.filter((i) => i !== item));
    }

    return (
        <div className="p-20 h-screen bg-slate-700 text-slate-300">

            <div className="w-1/2 mx-auto">
                <button
                    onClick={addItem}
                    className="border rounded px-2 py-1 bg-blue-500 cursor-pointer"
                >
                    Add
                </button>


                <ul className="mt-8 border rounded p-4 pt-1 overflow-hidden">
                    <AnimatePresence initial={false}>
                        {items.map((item) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                    opacity: { duration: 0.3 },
                                    height: { duration: 0.4 },
                                }}
                            >
                                <div className="flex items-center justify-between py-3 border-b border-gray-400">
                                    <span>Item {item}</span>
                                    <button
                                        onClick={() => removeItem(item)}
                                        className="border border-gray-400 rounded w-8 h-8 cursor-pointer hover:bg-red-500 hover:text-white duration-300"
                                    >
                                        &times;
                                    </button>
                                </div>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>

                <div className="mt-4 px-4">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
                        cum in laudantium atque est eligendi laboriosam assumenda, officia
                        praesentium sunt temporibus. Facilis mollitia modi debitis consectetur
                        eaque quia, explicabo aliquid!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SimpleList