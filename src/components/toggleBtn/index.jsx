import ToggleBtn from './ToggleBtn';
import { useState } from 'react';

const ToggleBtnContainer = () => {

    const [isOn, setIsOn] = useState(false);

    const [isDark, setIsDark] = useState(true);

    const toggling = () => setIsOn(pre => !pre);

    const togglingDark = () => setIsDark(pre => !pre);

    return (
        <div className='h-screen flex items-center justify-center'>

            <div className='space-y-2'>

                <div className="flex items-center gap-3">
                    <ToggleBtn
                        isChecked={isOn}
                        onChange={toggling}
                    />

                    <span onClick={toggling} className="cursor-pointer">
                        Toggle {isOn ? 'On' : 'Off'}
                    </span>
                </div>


                <div className="flex items-center gap-3">
                    <ToggleBtn
                        isChecked={isDark}
                        onChange={togglingDark}
                    />

                    <span onClick={togglingDark} className="cursor-pointer">
                        {isDark ? 'Dark' : 'Light'}
                    </span>
                </div>

            </div>

        </div>
    )
}

export default ToggleBtnContainer