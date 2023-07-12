import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCart } from '../../redux/slices/cartSlice';
import HeartIcon from "../../assets/images/icons/Heart"
function Products({ product }) {
  const dispatch = useDispatch()
  const handleCartBtn = (product) => {
    dispatch(setCart({ product }))
  }
  const [like, setLike] = useState(0)
  return (
    <div className="main__products">
      {
        product.map(item => {
          return (
            <div className="main__product" key={item.id}>
              <button className={`main__product-like ${like ? " active" : ""}`} onClick={() => setLike(!like)}><HeartIcon /></button>
              <img src={item.image} alt="product__img" loading="lazy" />
              <div className="main__product-detail">
                <div className="main__product-col">
                  <span className="main__product-name">{item.name}</span>
                  <span className="main__product-price">$ {item.price}.00</span>
                </div>
                <button className="main__product-add" onClick={() => handleCartBtn(item)}>+</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products;