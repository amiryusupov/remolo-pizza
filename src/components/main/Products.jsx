import React from 'react'
import { useDispatch } from 'react-redux';
import { setCart } from '../../redux/slices/cartSlice';

function Products({ product }) {    
    const dispatch = useDispatch()
    const handleCartBtn = (product) => {
        dispatch(setCart({ product }))
    }
    return (
        <div className="main__products">
            {
                product.map(item => {
                    console.log(product);
                    return (
                        <div className="main__product" key={item.id}>
                            <img src={item.image
} alt="product__img" />
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