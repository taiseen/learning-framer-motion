import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";

import SuspenseLoading from "./helper/SuspenseLoading";
import Layout from "./layout";
import Home from "./home";

const App = () => {
  return (
    <BrowserRouter>

      <Suspense fallback={<SuspenseLoading />}>
        <Routes>

          <Route path='/' element={<Layout />}>

            <Route index element={<Home />} />

            {
              routes.map(obj =>
                <Route
                  key={obj.path}
                  path={obj.path}
                  element={<obj.component />}
                />
              )
            }
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;