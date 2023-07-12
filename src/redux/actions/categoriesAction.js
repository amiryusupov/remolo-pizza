import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosUrl from "../../api";
import { categoriesListUrl } from "../../utils/urls";

export const getCategories = createAsyncThunk(
    'categories/getAllCategories',
    async (_, thunkApi) => {
        const response = await axiosUrl.get(categoriesListUrl)
        return response.data;
    }
)