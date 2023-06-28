import "./assets/scss/main.scss"
import { Route, Routes } from "react-router-dom";
import Sidebar from "../src/components/sidebar/index"
import { routes } from "./utils/routes";
import { SkeletonTheme } from "react-loading-skeleton";
function App() {
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
      </SkeletonTheme>
    </div>
  )
}

export default App;