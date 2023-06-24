import { products } from "../../helpers/products"

const initialState = {
    items: products
}

function ProductsReducer(state = initialState, action) {
    return state
}

export default ProductsReducer