import { Moon, Sun, Calendar, ArrowRight, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import DisplayResult from './DisplayResult';
import ToolTip from './ToolTip';



const DateCalculator = () => {
    // State management
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [number, setNumber] = useState('');
    const [unit, setUnit] = useState('days');
    const [result, setResult] = useState('');

    // Date calculation logic
    const calculateDate = () => {
        const num = parseInt(number);

        if (isNaN(num) || num === 0) {
            setResult('Please enter a non-zero number.');
            setIsResultVisible(true);
            return;
        }

        let currentDate = new Date();

        if (unit === 'days') {
            currentDate.setDate(currentDate.getDate() + num);
        } else if (unit === 'months') {
            currentDate.setMonth(currentDate.getMonth() + num);
        } else if (unit === 'years') {
            currentDate.setFullYear(currentDate.getFullYear() + num);
        }

        setResult(currentDate.toDateString());
        setIsResultVisible(true);
    };

    // Event handlers
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            calculateDate();
        }
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>

            {/* Animated background */}
            <AnimatedBackground darkMode={darkMode} />

            <div className="relative min-h-screen flex items-center justify-center p-4">
                {/* Theme toggle button */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`absolute top-4 right-4 p-3 rounded-full transition-colors ${darkMode
                        ? 'bg-gray-800 hover:bg-gray-700 text-yellow-300'
                        : 'bg-white hover:bg-gray-100 text-gray-800'
                        } shadow-lg`}
                >
                    {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>

                {/* Main content container */}
                <div className="relative flex items-center justify-center w-full max-w-5xl">

                    {/* Help tooltip - Now positioned absolutely */}
                    <ToolTip darkMode={darkMode} showTooltip={showTooltip} />

                    {/* Calculator container */}
                    <div className={`w-full max-w-md p-8 rounded-2xl backdrop-blur-xl shadow-2xl 
                        ${darkMode
                            ? 'bg-gray-800/50 text-white'
                            : 'bg-white/50 text-gray-800'
                        }`}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <Calendar
                                    className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
                                />
                                <h1 className="text-3xl font-bold ml-3">Date Calculator</h1>
                            </div>

                            <button
                                title='Click to show/hide help info...'
                                className={`p-2 rounded-lg transition-colors cursor-pointer outline-none 
                                    ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100/50'}`}
                                onClick={() => setShowTooltip(!showTooltip)}
                            >
                                <HelpCircle className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                            </button>
                        </div>

                        <div className="space-y-6">
                            {/* Input fields */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Enter a number (positive for future, negative for past)
                                </label>

                                <input
                                    type="number"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-900/20 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="e.g., 7 for future date, -7 for past date"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Time unit</label>

                                <select
                                    value={unit}
                                    onChange={(e) => setUnit(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-900/20 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="days">Days</option>
                                    <option value="months">Months</option>
                                    <option value="years">Years</option>
                                </select>
                            </div>

                            {/* Calculate button */}
                            <button
                                onClick={calculateDate}
                                className={`w-full py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors 
                                    ${darkMode
                                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                        : 'bg-purple-500 hover:bg-purple-600 text-white'
                                    }`}
                            >
                                <span>Calculate</span>
                                <ArrowRight size={20} />
                            </button>

                            {/* Result display with fixed height container */}
                            <DisplayResult result={result} isResultVisible={isResultVisible} darkMode={darkMode} number={number} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DateCalculator;