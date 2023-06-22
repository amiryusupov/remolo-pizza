function CategoriesReducer(state, action) {
    const {type, payload} = action
    if(type === "setActiveCategory") {
        state.activeCategory = payload.categryName
    }
    return state
}

export default CategoriesReducer