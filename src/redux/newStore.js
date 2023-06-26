import {combineReducers} from "redux"
import categoriesSlice from "./slices/categoriesSlice"
import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./slices/productSlice"
import cartSlice from "./slices/cartSlice"

const reducer = combineReducers({
    categories: categoriesSlice,
    products: productSlice,
    cart: cartSlice
})
const newStore = configureStore({reducer})
export default newStore;