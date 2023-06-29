import "./assets/scss/main.scss"
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "../src/components/sidebar/index"
import { routes } from "./utils/routes";
import { SkeletonTheme } from "react-loading-skeleton";
import Basket from "./components/basket";
function App() {
  const {pathname} = useLocation()
  const isCart = ["/", "/favourites"]
  return (
    <div className="app">
      <SkeletonTheme baseColor="#a6a6a6" highlightColor="#d2d2d2">
        <Sidebar />
        <Routes>
          {
            routes.map((item) => {
              return (
                <Route key={item.id} path={item.path} element={item.component()}/>
              )
            })
          }
        </Routes>
        {isCart.includes(pathname) ? <Basket/> : null}
      </SkeletonTheme>
    </div>
  )
}

export default App;