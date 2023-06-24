import { categories } from "../../helpers/categories"

const initialState = {
    activeCategory: "Pizzas",
    items: categories
}

function CategoriesReducer(state = initialState, action) {
    const {type, payload} = action
    if(type === "setActiveCategory") {
        state.activeCategory = payload.categryName
    }
    return state
}

export default CategoriesReducer