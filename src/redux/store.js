import { categories } from "../helpers/categories";
import { products } from "../helpers/products";
import CartReducer from "./reducers/cartReducer";
import CategoriesReducer from "./reducers/categoriesReducer";
import ProductsReducer from "./reducers/productsReducer";

export const store  = {
    _state: {
        categories: {
            activeCategory: "Pizzas",
            items: categories
        },
        product: {
            items: products
        },
        cart: {
            items: []
        }
    },
    render: () => {
        console.log("Hello");
    },
    
    getState: () => store._state,
    dispatch: (action) => {
        store._state.categories = CategoriesReducer(store._state.categories, action);
        store._state.product = ProductsReducer(store._state.product, action);
        store._state.cart = CartReducer(store._state.cart, action)
        store.render()
    },
    setActiveCategory: (categoryName) => {
        store._state.categories.activeCategory = categoryName;
        store.render()
    },
    subscribe: (callback) => {
        store.render = callback
    }
}