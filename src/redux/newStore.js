import {combineReducers, legacy_createStore as createStore} from "redux"
import { store } from "./store"
import CategoriesReducer from "./reducers/categoriesReducer"
import ProductsReducer from "./reducers/productsReducer"
import CartReducer from "./reducers/cartReducer"

const reducers = combineReducers({
    categories: CategoriesReducer,
    products: ProductsReducer,
    cart: CartReducer
})
const store = createStore(reducers)

export default store;