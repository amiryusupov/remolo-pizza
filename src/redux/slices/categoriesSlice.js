import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../helpers/categories";

const initialState = {
    activeCategory: "Pizzas",
    items: categories
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload
        }
    }
})
export const {setActiveCategory} = categoriesSlice.actions
export default categoriesSlice.reducer;