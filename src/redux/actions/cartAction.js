import { DECREASE_QTY, DELETE_CART, INCREASE_QTY, SET_CART } from "../actionTypes";

export const setCartAc = (payload) => ({type: SET_CART, payload})
export const delCartAc = (payload) => ({type: DELETE_CART, payload})
export const increaseCartAc = (payload) => ({type: INCREASE_QTY, payload})
export const decreaseCartAc = (payload) => ({type: DECREASE_QTY, payload})