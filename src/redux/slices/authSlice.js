import { createSlice } from "@reduxjs/toolkit";
import { loginRequest } from "../actions/loginAction";

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");
const initialState = {
  tokens: {
    accessToken: accessToken ? accessToken : [],
    refreshToken: refreshToken ? refreshToken : []
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
      localStorage.setItem("tokens", JSON.stringify(state))
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload
    }
  },
  extraReducers: {
    [loginRequest.pending.type]: (state, action) => {
      state.loading = true
    },
    [loginRequest.fulfilled.type]: (state, action) => {
      state.tokens = {
        accessToken: action.payload.access,
        refreshToken: action.payload.refresh
      }
      state.loading = false
      state.isAuth = true
      localStorage.setItem("accessToken", action.payload.access)
      localStorage.setItem("refreshToken", action.payload.refresh)
    }
  }
});
export const { setAuth, setIsAuth } = authSlice.actions;
export default authSlice.reducer;
