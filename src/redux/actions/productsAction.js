import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosUrl from "../../api";
import { productsListUrl } from "../../utils/urls";

export const getProducts = createAsyncThunk(
    'products/getAllProducts',
    async (_, thunkApi) => {
        const response = await axiosUrl.get(productsListUrl)
        return response.data;
    }
)