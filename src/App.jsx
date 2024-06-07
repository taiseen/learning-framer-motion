import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";

import SuspenseLoading from "./helper/SuspenseLoading";
import Home from "./components";

const App = () => {
  return (
    <BrowserRouter>

      {/* <Home /> */}

      <Suspense fallback={<SuspenseLoading />}>
        
        <Routes>
          <Route path='/' element={<Home />} />

          {
            routes.map(obj =>
              <Route key={obj.path} path={obj.path} element={<obj.component />} />
            )
          }
        </Routes>

      </Suspense>

    </BrowserRouter>
  )
}

export default App;