import React from "react";
import RemoveIcon from "../../assets/images/icons/Remove.jsx";
import { useDispatch } from "react-redux";
import { decreaseQty, deleteCart, increaseQty } from "../../redux/slices/cartSlice";

function Product({ products }) {
  const dispatch = useDispatch()
  const handleCartItemDel = (id) => {
    dispatch(deleteCart({ id }));
  };
  const handleIncrease = (id) => {
    dispatch(increaseQty({id}))
  }
  const handleDecrease = (id) => {
    dispatch(decreaseQty({id}))
  }

  return (
    <div className="basket__products-items">
      {products.items.map((item) => {
        return (
          <div className="basket__products-item" key={item.id}>
            <img
              src={item.image}
              className="basket__products-item-img"
              alt="basket__product"
            />
            <div className="basket__products-item-text">
              <div className="basket__products-item-span">
                <span className="basket__products-item-name">{item.name}</span>
                <span className="basket__products-item-price">
                  $ {item.price * item.qty}
                </span>
              </div>
              <div className="basket__products-item-quantity">
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => handleIncrease(item.id)}>+</button>
              </div>
            </div>
            <div className="basket__products-item-remove" onClick={() => handleCartItemDel(item.id)}>
              <RemoveIcon />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
