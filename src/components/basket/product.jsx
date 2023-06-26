import React from "react";
import { decreaseCartAc, delCartAc, increaseCartAc } from "../../redux/actions/cartAction";
import RemoveIcon from "../../assets/images/icons/remove";
import { useDispatch } from "react-redux";

function Product({ products }) {
  const dispatch = useDispatch()
  const handleCartItemDel = (id) => {
    dispatch(delCartAc({ id }));
  };
  const handleIncrease = (id) => {
    dispatch(increaseCartAc({id}))
  }
  const handleDecrease = (id) => {
    dispatch(decreaseCartAc({id}))
  }

  return (
    <div className="basket__products-items">
      {products.items.map((item) => {
        return (
          <div className="basket__products-item" key={item.id}>
            <img
              src={item.img}
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
