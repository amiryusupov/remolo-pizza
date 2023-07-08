import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosUrl from "../../api";
import { login } from "../../utils/urls";

export const loginRequest = createAsyncThunk(
    'user/login',
    async (data, thunkApi) => {
        try {
            const response = await axiosUrl.post(login, data)
            console.log(response.data);
            return response.data
        }
        catch (error) {
            return error
        }
    }
)