import React from 'react'
import RemoveIcon from '../../assets/images/icons/Remove';
import { settings } from '../../helpers/settings';
import { useSelector } from 'react-redux';

function Order() {
  const {user} = useSelector((state) => state)
  return (
    <div className="order">
      <div className="order__column">
        <div className="order__detail">
        <div className="order__checkout">
          <div className="order__checkout__text">
            <span className="order__checkout__title">Checkout</span>
            <span className="order__checkout__text">Confirme su pedido</span>
          </div>
          <RemoveIcon/>
        </div>
        <div className="order__data">
          {
            settings.map((item) => {
              return (
                <div className="order__data__item" key={item.id}>
                  <span className="order__data__item-title">{item.title}*</span>
                  <span className="order__data__item-text">{user[item.key]}</span>
              </div>
              )
            })
          }
        </div>
        </div>
        <div className="order__confirm">
          <button className="order__confirm-btn">Generar recibo</button>
        </div>
      </div>
    </div>
  )
}

export default Order;