import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
    'categories/getAllCategories',
    async (_, thunkApi) => {
        const response = await axios.get("https://pizzaremolo.pythonanywhere.com/api/category/all/")
        return response.data;
    }
)
export const getProducts = createAsyncThunk(
    'products/getAllProducts',
    async (_, thunkApi) => {
        const response = await axios.get("https://pizzaremolo.pythonanywhere.com/api/product/all/")
        return response.data;
    }
)