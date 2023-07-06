import { createSlice } from "@reduxjs/toolkit";
import { loginRequest } from "../actions/loginAction";

const localeStorageUser = localStorage.getItem("tokens");
// const initialState = JSON.parse(localeStorageUser)
//   ? JSON.parse(localeStorageUser)
//   : {
//       accessToken: "",
//       refreshToken: "",
//     };
const initialState = {
    tokens: {
        accessToken: "",
        refreshToken: ""
    },
    loading: false,
    isAuth: false
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state[action.payload.key] = action.payload.value;
      localStorage.setItem("tokens", JSON.stringify(state));
    },
  },
  extraReducers: {
    [loginRequest.pending.type]: (state) => {
        state.loading = true
    },
    [loginRequest.fulfilled.tpye]: (state, action) => {
        state.tokens = {...action.payload}
        state.loading = false
        state.isAuth = true
    }
  }
});
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
