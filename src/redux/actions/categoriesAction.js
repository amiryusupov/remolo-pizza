import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosUrl from "../../api";
import { categoriesListUrl, categoryAddUrl } from "../../utils/urls";

export const getCategories = createAsyncThunk(
    'categories/getAllCategories',
    async (_, thunkApi) => {
        const response = await axiosUrl.get(categoriesListUrl)
        return response.data;
    }
)
export const addCategory = async (data) => {
    try {
        const response = await axiosUrl.put(categoryAddUrl, data)
        return response.data
    } catch (error) {
        return error
    }
}