import { createSlice } from "@reduxjs/toolkit"
import { products } from "../../helpers/products"
import { getProducts } from "../actions/categoriesAction"

const initialState = {
    items: [],
    loading: false,
    error: ""
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [getProducts.fulfilled.type]: (state, action) => {
            state.items = action.payload,
            state.loading = false,
            state.error = ""
        },
        [getProducts.pending.type]: (state, action) => {
            state.loading = true
        }
    }
})

export default productsSlice.reducer