import Basket from "../basket";
import Main from "../main";
import Sidebar from "../sidebar/index";

export const Layout = ({store}) => {
  const {cart} = store.getState()
  return (
    <div className="wrapper">
      <div className="main-layout__row">
        <Sidebar/>
        <Main store={store}/>
        <Basket store={store} cartProducts={cart.items}/>
      </div>
    </div>
  );
};
