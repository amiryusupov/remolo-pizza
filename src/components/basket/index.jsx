import React, { useState } from "react";
import del_img from "../../assets/images/icons/delete.svg";
import Product from "./product";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCarts } from "../../redux/slices/cartSlice";
import Order from "./Order";

function Basket() {
  const { cart } = useSelector(state => state)
  const dispatch = useDispatch()
  const productPrice = cart.items.map(item => item.price * item.qty)
  const totalPrice = () => {
    const newProductPrices = [...productPrice];
    const newTotal = newProductPrices.reduce((sum, price) => sum + price, 0);
    return newTotal
  };
  const handleAllCartsDel = (items) => {
    dispatch(deleteAllCarts({items}))
  }
  const [isCheckout, setIsCheckout] = useState(false)
  return (
    <div className="basket">
      <div className="basket__row">
        <span className="basket__title">Mi orden</span>
        {
          isCheckout ? <Order/> : (
              <div className="basket__products">
              <div className="basket__products-desc">
                <div className="basket__products-desc-text">
                  <span className="basket__products-desc-text1">
                    Listado del pedido
                  </span>
                  <span className="basket__products-desc-text2">{cart.items?.length} Items</span>
                </div>
                <img
                  src={del_img}
                  onClick={() => handleAllCartsDel(cart)}
                  className="basket__products-desc-img"
                  alt="delete__img"
                />
              </div>
              <Product products={cart} />
              </div>
        )}
        <div className="basket__order">
                <div className="basket__order-price">
                  <div className="basket__order-price-text">
                    <span className="basket__order-price-text1">Envío</span>
                    <span className="basket__order-price-text2">$ 100.00</span>
                  </div>
                  <div className="basket__order-price-text">
                    <span className="basket__order-price-text1">Items totales</span>
                    <span className="basket__order-price-text2">$ {`${totalPrice()}`}.00</span>
                  </div>
                </div>
                <button className="basket__order-submit" disabled={cart.items.length <= 0} onClick={() => setIsCheckout(true)}>Ir al checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
