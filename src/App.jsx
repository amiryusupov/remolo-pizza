import "./assets/scss/main.scss"
import { Route, Routes } from "react-router-dom";
import Sidebar from "../src/components/sidebar/index"
import { routes } from "./utils/routes";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
      {
        routes.map((item) => {
          return (
            <Route key={item.id} path={item.path} element={item.component}/>
          )
        })
      }
    </Routes>
    </div>
  )
}

export default App;