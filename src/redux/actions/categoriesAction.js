import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosUrl from "../../api";
import { categoriesListUrl, login, productsListUrl } from "../../utils/urls";

export const getCategories = createAsyncThunk(
    'categories/getAllCategories',
    async (_, thunkApi) => {
        const response = await axiosUrl.get(categoriesListUrl)
        return response.data;
    }
)
export const getProducts = createAsyncThunk(
    'products/getAllProducts',
    async (_, thunkApi) => {
        const response = await axiosUrl.get(productsListUrl)
        return response.data;
    }
)
export const loginRequest = createAsyncThunk(
    'user/login',
    async (_, thunkApi) => {
        const response = await axiosUrl.post(
            login,
            {email: "admin@gmail.com", password: "admin"}
        )
        console.log(response);
    }
)