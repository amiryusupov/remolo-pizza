import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    address: '',
    phone: ''
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state[action.payload.key] = action.payload.value
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setAddress: (state, action) => {
            state.address = action.payload
        },
        setPhone: (state, action) => {
            state.phone = action.payload
        },
    }
})
export const {setName, setAddress, setPhone, setUser} = userSlice.actions
export default userSlice.reducer