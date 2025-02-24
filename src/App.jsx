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
              // single || linear way of navigation...
              // routes.map(obj =>
              //   <Route
              //     key={obj.path}
              //     path={obj.path}
              //     element={<obj.component />}
              //   />
              // )
            }

            {
              routes.map(routeObj => {

                return routeObj.isChildren
                  ? (
                    <Route
                      key={routeObj.path}
                      path={routeObj.path}
                      element={<routeObj.component />}
                    >
                      {
                        routeObj.childRoutes.map(childObj => (
                          <Route
                            key={childObj.path}
                            path={childObj.path}
                            element={<childObj.component />}
                          />
                        ))
                      }
                    </Route>
                  )
                  : (
                    <Route
                      key={routeObj.path}
                      path={routeObj.path}
                      element={<routeObj.component />}
                    />
                  )
              })
            }
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;