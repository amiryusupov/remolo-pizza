import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "../src/components/sidebar/index"
import { adminRoutes, routes } from "./utils/routes";
import { SkeletonTheme } from "react-loading-skeleton";
import Basket from "./components/basket";
import { useSelector } from "react-redux";
import "./assets/scss/main.scss"
import useIsAuth from "./hooks/useIsAuth";

function App() {
  const { color } = useSelector((state) => state.color)
  const { isAuth: auth } = useSelector((state) => state.auth)
  const { pathname } = useLocation()
  const isCart = ["/", "/favourites"]
  const isAuth = useIsAuth()
  return (
    <div className="app" data-colors={color}>
      <SkeletonTheme baseColor="#a6a6a6" highlightColor="#d2d2d2">
        <Sidebar />
        <Routes>
          {routes.map((item) => (
            <Route key={item.id} path={item.path} element={item.component()} />
          ))}
          {auth
            ? adminRoutes.map((item) => (
              <Route key={item.id} path={item.path} element={item.component()} />
            )) : null
          }
        </Routes>
        {isCart.includes(pathname) ? <Basket /> : null}
      </SkeletonTheme>
    </div>
  )
}

export default App