import MultiLineNotification from "./MultiLineNotification";
import OneLineNotification from "./OneLineNotification";
import AbortBtnContainer from "./AbortBtnContainer";
import { useState } from "react";


const BoxOpenDropDown = () => {

    const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);


    return (
        <div className="w-full h-screen flex items-center justify-center ">

            <div className="flex flex-col gap-3 p-4 bg-green-300 rounded-sm w-72">

                <div style={{ minHeight: isMoreInfoOpen ? '180px' : '40px', transition: 'min-height 0.3s ease' }}>
                    {
                        isMoreInfoOpen
                            ? <MultiLineNotification />
                            : <OneLineNotification />
                    }
                </div>

                <AbortBtnContainer
                    isMoreInfoOpen={isMoreInfoOpen}
                    setIsMoreInfoOpen={setIsMoreInfoOpen}
                />

            </div>
        </div>
    )
}

export default BoxOpenDropDown