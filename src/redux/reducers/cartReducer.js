import { DELETE_CART, SET_CART } from "../actionTypes"

function CartReducer(state, action) {
    const { type, payload } = action
    switch (type) {
        case SET_CART:
            let isCart = state.items.some((item) => item.id === payload.product.id)
            state.items = isCart ? state.items.map((item) => 
                item.id === payload.product.id
                ? { ...item, qty: item.qty + 1 }
                : item
                )
                : [...state.items, { ...payload.product, qty: 1 }];
            return state;
        case DELETE_CART:
            state.items = state.items.filter((item) => item.id !== payload.id)
            return state
        default:
            return state
    }
}

export default CartReducer;