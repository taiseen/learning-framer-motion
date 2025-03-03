import { useForm } from "react-hook-form";
import Placeholder from "./Placeholder"

const AnimationPlaceholder = () => {

    const { register, setFocus, watch } = useForm();

    const userInput = "userInput";
    const maxInputLimit = 500;

    return (
        <div className="w-full h-screen flex items-center justify-center bg-slate-800">

            <div className="relative">

                <Placeholder chatInput={userInput} watch={watch} setFocus={setFocus} />

                <textarea
                    autoFocus
                    className="w-[560px] min-h-48 max-h-96 p-2.5 rounded-md bg-slate-700 text-white  caret-slate-400 outline-none"
                    {...register(userInput, {
                        required: "Input Required",
                        maxLength: {
                            value: maxInputLimit,
                            message: `Input can't exceed ${maxInputLimit} characters`,
                        },
                    })}
                />
            </div>
        </div>
    )
}

export default AnimationPlaceholder