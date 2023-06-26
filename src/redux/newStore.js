import {combineReducers, legacy_createStore as createStore} from "redux"
import CategoriesReducer from "./reducers/categoriesReducer"
import ProductsReducer from "./reducers/productsReducer"
import CartReducer from "./reducers/cartReducer"

const reducers = combineReducers({
    categories: CategoriesReducer,
    products: ProductsReducer,
    cart: CartReducer
})
const newStore = createStore(reducers)

export default newStore;