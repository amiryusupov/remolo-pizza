import {combineReducers} from "redux"
import categoriesSlice from "./slices/categoriesSlice"
import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./slices/productSlice"
import cartSlice from "./slices/cartSlice"
import userSlice from "./slices/userSlice"
import colorSlice from "./slices/colorSlice"

const reducer = combineReducers({
    categories: categoriesSlice,
    products: productSlice,
    cart: cartSlice,
    user: userSlice,
    color: colorSlice
})
const newStore = configureStore({reducer})
export default newStore;