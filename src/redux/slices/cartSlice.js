import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, {payload}) => {
            let isCart = state.items.some((item) => item.id === payload.product.id)
            state.items = isCart ? state.items.map((item) =>
                item.id === payload.product.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            )
                : [...state.items, { ...payload.product, qty: 1 }];
        },
        deleteCart: (state, {payload}) => {
            state.items = state.items.filter((item) => item.id !== payload.id)
        },
        increaseQty: (state, {payload}) => {
            state.items = state.items.map((item) =>
                item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
        },
        decreaseQty: (state, {payload}) => {
            state.items = state.items.map((item) =>
                item.id === payload.id
                    ? {...item, qty: item.qty === 1 ? 1 : item.qty - 1}
                    : item
            )
        }
    } 
})

export const {setCart, deleteCart, increaseQty, decreaseQty} = cartSlice.actions
export default cartSlice.reducer