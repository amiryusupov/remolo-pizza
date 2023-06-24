import { Layout } from "./components";
import "./assets/scss/main.scss"
import { useSelector } from "react-redux";
function App({store}) {
  const selector = useSelector((state) => state)
  console.log(selector);
  return <Layout store={selector}/>;
}

export default App;