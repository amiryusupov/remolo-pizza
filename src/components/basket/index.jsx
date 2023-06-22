import React from "react";
import del_img from "../../assets/images/icons/delete.svg";
import Product from "./Product.jsx";

function Basket({cartProducts}) {
  return (
    <div className="basket">
      <div className="basket__row">
        <span className="basket__title">Mi orden</span>
        <div className="basket__products">
          <div className="basket__products-desc">
            <div className="basket__products-desc-text">
              <span className="basket__products-desc-text1">
                Listado del pedido
              </span>
              <span className="basket__products-desc-text2">4 Items</span>
            </div>
            <img
              src={del_img}
              className="basket__products-desc-img"
              alt="delete__img"
            />
          </div>
          <Product products={cartProducts} />
        </div>
        <div className="basket__order">
          <div className="basket__order-price">
            <div className="basket__order-price-text">
              <span className="basket__order-price-text1">Envío</span>
              <span className="basket__order-price-text2">$ 100.00</span>
            </div>
            <div className="basket__order-price-text">
              <span className="basket__order-price-text1">Items totales</span>
              <span className="basket__order-price-text2">$ 1650.00</span>
            </div>
          </div>
          <span className="basket__order-submit">Ir al checkout</span>
        </div>
      </div>
    </div>
  );
}

export default Basket;
