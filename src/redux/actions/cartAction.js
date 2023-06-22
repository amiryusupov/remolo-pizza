import { DELETE_CART, SET_CART } from "../actionTypes";

export const setCartAc = (payload) => ({type: SET_CART, payload})
export const delCartAc = (payload) => ({type: DELETE_CART, payload})