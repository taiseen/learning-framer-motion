import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Placeholder = ({ chatInput, setFocus, watch }) => {

    const samplePlaceholders = [
        "Start Chat with your AI assistant...",
        "Dynamic placeholder...",
        "Enter your question and let AI assist you...",
    ];

    const userChatInput = watch(chatInput, "");

    const [sampleInputIndex, setSampleInputIndex] = useState(0);

    useEffect(() => {
        if (userChatInput.length > 0) return;

        const interval = setInterval(() => {
            setSampleInputIndex((prev) => (prev + 1) % samplePlaceholders.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [samplePlaceholders.length, userChatInput.length]);

    const handleFocus = () => setFocus(chatInput, { shouldSelect: true }); // { shouldFocus: true }

    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
                aria-hidden
                transition={{ type: "spring", bounce: 0 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
                exit={{ y: -20, opacity: 0 }}
                onMouseEnter={handleFocus}
                onClick={handleFocus}
                key={sampleInputIndex}
                data-feedback={userChatInput ? "true" : "false"}
                className="absolute top-2.5 left-3 w-[96%] text-slate-400 data-[feedback=true]:hidden"
            >
                {samplePlaceholders[sampleInputIndex]}
            </motion.span>
        </AnimatePresence>
    );
};

export default Placeholder;
