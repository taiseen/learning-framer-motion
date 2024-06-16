import DemoEmptyBoxHolder from "./scroll/DemoEmptyBoxHolder";
import GridBoxContainer from "./gridBox/GridBoxContainer";
import ScreenScroll from "./scroll/ScreenScroll";
import BoxContainer from "./hover/BoxContainer";
import Progressbar from "./scroll/Progressbar";
import DummyContent from "./DummyContent";
import Banner from "./scroll/Banner";
import PopupMenu from "./PopupMenu";
import NavBar from "./NavBar";
import React from "react";

const AnimationEffects = () => {

    const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);

    const handleToggle = () => setIsPopupMenuOpen(pre => !pre);

    return (
        <div className="p-2 mb-10">

            <Progressbar />

            <PopupMenu isPopupMenuOpen={isPopupMenuOpen} handleToggle={handleToggle} />

            <NavBar handleToggle={handleToggle} />

            <BoxContainer />

            <DummyContent />

            <Banner handleToggle={handleToggle} />

            <DummyContent />

            <DemoEmptyBoxHolder />

            <DummyContent />

            <GridBoxContainer />

            <DummyContent />

            <ScreenScroll />

            <DummyContent />

            <DummyContent />

        </div>
    )
}

export default AnimationEffects