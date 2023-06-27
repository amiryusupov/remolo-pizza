import Basket from "../basket";
import Main from "../main";

export const Layout = () => {
  return (
    <div className="layout">
      <div className="main-layout__row">
        <Main />
        <Basket />
      </div>
    </div>
  );
};
