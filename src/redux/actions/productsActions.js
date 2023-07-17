import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosUrl from "../../api";
import { productAddUrl, productEditUrl, productsListUrl } from "../../utils/urls";

export const getProducts = createAsyncThunk(
    'products/getAllProducts',
    async (_, thunkApi) => {
        const response = await axiosUrl.get(productsListUrl)
        return response.data;
    }
)

export const addProduct = async (data) => {
    try {
      const response = await axiosUrl.put(productAddUrl, data)
      return response.data
    } catch (error) {
      return error
    }
  }
export const editProduct = async (data, id) => {
    try {
      const response = await axiosUrl.put(productEditUrl(id), data)
      return response.data
    } catch (error) {
      return error
    }
  }