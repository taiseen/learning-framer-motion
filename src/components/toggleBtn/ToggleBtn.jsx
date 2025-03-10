import { motion } from "framer-motion";

const ToggleBtn = ({ isChecked, onChange }) => {

    return (
        <div onClick={onChange} className="cursor-pointer">
            <motion.div
                className={`w-11 h-6 border rounded-full flex items-center 
                    ${isChecked ? "border-blue-600" : "border-slate-600"}`}
            >
                <motion.div
                    initial={{ x: 1 }}
                    animate={{ x: isChecked ? 21 : 1 }}
                    className={`w-5 h-5 rounded-full ${isChecked ? "bg-blue-600" : "bg-slate-600"}`}
                />
            </motion.div>
        </div>
    );
};

export default ToggleBtn;
