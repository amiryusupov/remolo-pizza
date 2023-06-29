import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: "red"
}

const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        setcolor: (state, action) => {
            state.color = action.payload
        }
    }
})
export const {setcolor} = colorSlice.actions
export default colorSlice.reducer;