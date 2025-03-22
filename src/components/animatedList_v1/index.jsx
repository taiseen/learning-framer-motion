import { AnimatePresence } from "framer-motion";
import { generateList } from "./data";
import { useState } from "react";
import ListItem from "./ListItem";
import "./style.css";

const AnimatedList = () => {

    const [list, setList] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleAddItem = () => {
        const newItem = generateList();
        setList((prev) => [...prev, newItem]);
    };

    const handleItemToggle = (id) => {
        selectedItems.includes(id)
            ? setSelectedItems((prev) => prev.filter((i) => i != id))
            : setSelectedItems((prev) => [...prev, id]);
    };

    const handleItemArchive = () => {
        setList((prev) => prev.filter((item) => !selectedItems.includes(item.id)));
        setSelectedItems([]);
    };

    return (
        <section className="h-screen flex items-center justify-center bg-slate-800">
            <div className="bg-slate-300 rounded-md w-1/3">
                <div className="flex justify-between w-full border-b-zinc-400 border-b-[1px] p-4">
                    <button
                        className="-mx-2 rounded px-2 py-1 hover:text-zinc-100 bg-blue-400 text-sky-100 cursor-pointer"
                        onClick={handleAddItem}
                    >
                        Add
                    </button>

                    <button
                        className="-mx-2 rounded px-2 py-1 hover:text-zinc-100 bg-red-400 text-red-100 cursor-pointer"
                        onClick={handleItemArchive}
                    >
                        Archive
                    </button>
                </div>

                <div className="overflow-y-scroll px-3 py-2 h-[400px] listScroll">
                    <ul>
                        <AnimatePresence initial={false}>
                            {
                                list.length == 0 && (
                                    <ListItem>
                                        <h1 className="text-center font-semibold py-4 bg-zinc-50 rounded-md">
                                            You have no messages.
                                        </h1>
                                    </ListItem>
                                )
                            }

                            {[...list].reverse().map((message) => (
                                <ListItem key={message.id}>
                                    <div className="py-0.5 transition">
                                        <button
                                            onClick={() => handleItemToggle(message.id)}
                                            className={`flex flex-col w-full p-4 rounded-md transition-colors 
                                            ${selectedItems.includes(message.id)
                                                    ? "bg-blue-400"
                                                    : "bg-white"
                                                }`}
                                        >
                                            <p
                                                className={`font-medium transition-colors 
                                                ${selectedItems.includes(message.id)
                                                        ? "text-white"
                                                        : "text-zinc-600"
                                                    }`}
                                            >
                                                {message.content[0]}
                                            </p>

                                            <span
                                                className={`text-sm transition-colors 
                                                ${selectedItems.includes(message.id)
                                                        ? "text-zinc-100"
                                                        : "text-zinc-400"
                                                    }`}
                                            >
                                                {message.content[1]}
                                            </span>
                                        </button>
                                    </div>
                                </ListItem>
                            ))}
                        </AnimatePresence>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AnimatedList