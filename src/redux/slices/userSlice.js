import { createSlice } from "@reduxjs/toolkit";

const localeStorageUser = localStorage.getItem("user");
const initialState = JSON.parse(localeStorageUser)
  ? JSON.parse(localeStorageUser)
  : {
      name: "",
      address: "",
      phone: "",
    };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state[action.payload.key] = action.payload.value;
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
