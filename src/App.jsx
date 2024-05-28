import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { routes } from "./routes";
import Home from "./components";

const App = () => {
  return (
    <BrowserRouter>

      {/* <Home /> */}

      <Routes>
        <Route path='/' element={<Home />} />

        {
          routes.map(obj =>
            <Route key={obj.path} path={obj.path} element={<obj.component />} />
          )
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App;