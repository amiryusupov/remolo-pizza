import { DELETE_CART, SET_CART } from "../actionTypes"

function CartReducer(state, action) {
    const {type, payload} = action
    switch (type) {
        case SET_CART:
            state.items = [...state.items, {...payload.product}];
            return state;
        case DELETE_CART:
            state.items = state.items.filter((item) => item.id !== payload.id)
            return state
        default:
            return state
    }
}

export default CartReducer;