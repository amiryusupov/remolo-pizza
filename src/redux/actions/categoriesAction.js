import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    'categories/allCategories',
    async (_, thunkApi) => {
        const response = await axios.get("https://pizzaremolo.pythonanywhere.com/api/product/all/")
        return response.data;
    }
)