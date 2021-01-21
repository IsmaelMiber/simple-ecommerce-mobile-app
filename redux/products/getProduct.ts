import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsApi from "../../API/products";
import { ProductSliceInitialState } from "../../interfaces";

const fetchProductById = createAsyncThunk(
  "product/requestStatus",
  async (id: number, thunkApi) => {
    try {
      const response = await productsApi.fetchProductById(id);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response);
    }
  }
);

const initialState: ProductSliceInitialState = {
  product: null,
  loading: false,
  requestId: undefined,
  error: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProductById.pending.type]: (state, action) => {
      if (!state.loading) {
        state.loading = true;
        state.requestId = action.meta.requestId;
        state.error = "";
      }
    },
    [fetchProductById.fulfilled.type]: (state, action) => {
      if (state.loading && state.requestId == action.meta.requestId) {
        state.loading = false;
        state.requestId = undefined;
        state.error = "";
        state.product = action.payload;
      }
    },
    [fetchProductById.rejected.type]: (state, action) => {
      if (state.loading && state.requestId == action.meta.requestId) {
        state.loading = false;
        state.requestId = undefined;
        state.error = action.error.message;
      }
    },
  },
});

export default productSlice;
export { fetchProductById };
