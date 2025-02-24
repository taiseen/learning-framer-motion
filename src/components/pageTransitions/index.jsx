import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import pageTransitionsRoutes from "./routes";

const PageTransitions = () => {
    const location = useLocation();

    return (
        <div className="bg-red-800 min-h-screen -z-10">
            <Navbar />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    {
                        pageTransitionsRoutes.map(obj =>
                            obj.title === 'Home' ? (
                                <>
                                    {/* 🚩 for auto selected this component & update ulr info also 🚩 */}
                                    <Route
                                        index
                                        key="home-index"
                                        element={<Navigate to="./home" replace />}
                                    />

                                    <Route
                                        path="/home"
                                        key={obj.path}
                                        element={<obj.component />}
                                    />
                                </>
                            ) : (
                                <Route
                                    key={obj.path}
                                    path={obj.path}
                                    element={<obj.component />}
                                />
                            )
                        )
                    }
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default PageTransitions;