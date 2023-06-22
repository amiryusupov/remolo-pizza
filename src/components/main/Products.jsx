import React from 'react'
import { setCartAc } from '../../redux/actions/cartAction';

function Products({ product, store }) {
    const handleCartBtn = (product) => {
        store.dispatch(setCartAc({ product }))
    }
    return (
        <div className="main__products">
            {
                product.map(item => {
                    return (
                        <div className="main__product" key={item.id}>
                            <img src={item.img} alt="product__img" />
                            <div className="main__product-detail">
                                <div className="main__product-col">
                                    <span className="main__product-name">{item.name}</span>
                                    <span className="main__product-price">$ {item.price}.00</span>
                                </div>
                                <button className="main__product-btn" onClick={() => handleCartBtn(item)}>+</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;