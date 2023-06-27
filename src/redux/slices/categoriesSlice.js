import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../actions/categoriesAction";

const initialState = {
    activeCategory: 1,
    items: [],
    loading: true
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload
        },
    },
    extraReducers: {
        [getCategories.fulfilled.type]: (state, action) => {
            state.items = action.payload,
            state.loading = false
        },
        [getCategories.pending.type]: (state) => {
            state.loading = true
        },

    }
})
export const {setActiveCategory} = categoriesSlice.actions
export default categoriesSlice.reducer;