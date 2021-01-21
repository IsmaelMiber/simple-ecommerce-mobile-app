import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import catsApi from "../../API/categories";
import { CategoryProducts } from "../../interfaces";
import { Category } from "../../types";

const fetchCatProducts = createAsyncThunk(
  "catProducts/requestStatus",
  async (category: Category, thunkApi) => {
    try {
      const response = await catsApi.fetchCatProducts(category);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response);
    }
  }
);

const fetchMoreCatProducts = createAsyncThunk(
  "moreCatProducts/requestStatus",
  async (category: Category, thunkApi) => {
    try {
      const response = await catsApi.fetchCatProducts(category);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response);
    }
  }
);

const initialState: CategoryProducts = {
  catProducts: [],
  loading: false,
  requestId: undefined,
  error: "",

  moreLoading: false,
  moreRequestId: undefined,
  moreError: "",
};

const catProductsSlice = createSlice({
  name: "catProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCatProducts.pending.type]: (state, action) => {
      state.loading = true;
      state.requestId = action.meta.requestId;
      console.log(state.requestId);
    },
    [fetchCatProducts.fulfilled.type]: (state, action) => {
      if (state.loading && state.requestId == action.meta.requestId) {
        state.loading = false;
        state.requestId = undefined;
        state.error = "";
        state.catProducts = action.payload;
      }
    },
    [fetchCatProducts.rejected.type]: (state, action) => {
      if (state.loading && state.requestId == action.meta.requestId) {
        state.loading = false;
        state.requestId = undefined;
        state.error = action.error.message;
      }
    },

    // fetch more products

    [fetchMoreCatProducts.pending.type]: (state, action) => {
      if (!state.moreLoading) {
        state.moreLoading = true;
        state.moreRequestId = action.meta.requestId;
      }
    },
    [fetchMoreCatProducts.fulfilled.type]: (state, action) => {
      if (state.moreLoading && state.moreRequestId == action.meta.requestId) {
        state.moreLoading = false;
        state.moreRequestId = undefined;
        state.moreError = "";
        state.catProducts = state.catProducts.concat(action.payload);
      }
    },
    [fetchMoreCatProducts.rejected.type]: (state, action) => {
      if (state.moreLoading && state.moreRequestId == action.meta.requestId) {
        state.moreLoading = false;
        state.moreRequestId = undefined;
        state.moreError = action.error.message;
      }
    },
  },
});

export default catProductsSlice;
export { fetchCatProducts, fetchMoreCatProducts };
