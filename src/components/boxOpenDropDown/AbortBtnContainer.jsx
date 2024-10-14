const AbortBtnContainer = ({ isMoreInfoOpen, setIsMoreInfoOpen }) => {

    const handleMultipleAiModelTaskCancel = (data) => {
        console.log(data);
    }

    return (
        <div className="flex gap-3 items-center">
            <button
                className="w-24 py-2 rounded-full bg-white text-black duration-300 hover:bg-red-400 hover:text-white"
                onClick={() => handleMultipleAiModelTaskCancel('data...')}
            >
                Abort
            </button>

            <button
                className="w-24 py-2 rounded-full border border-white flex gap-2 items-center justify-center"
                onClick={() => setIsMoreInfoOpen((pre) => !pre)}
            >
                {isMoreInfoOpen ? 'Less' : 'More'}
            </button>
        </div>
    )
}

export default AbortBtnContainer