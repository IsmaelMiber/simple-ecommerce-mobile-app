import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsApi from "../../API/products";
import { CartProducts, CarState, CategoryProduct } from "../../interfaces";

const fetchProductsByIds = createAsyncThunk(
  "productsByIds/requestStatus",
  async (ids: number[], thunkApi) => {
    try {
      const responses = await productsApi.fetchProductsByIds(ids);
      return responses.map((response) => response.data);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response);
    }
  }
);

const initialState: CarState = {
  products: {},
  loading: false,
  requestId: undefined,
  error: "",
  count: 0,
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart(state, action) {
      var { payload } = action;
      var { id } = payload;
      state.products[id] = { ...payload, count: 1 };
      state.count += 1;
    },

    deleteFromCart(state, action) {
      var { payload: id } = action;
      delete state.products[id];
      state.count -= 1;
    },

    incrementProductCount(state, action) {
      var { products } = state;
      var { payload: id } = action;
      var product: CategoryProduct = products[id];
      if (!product.count) {
        product.count = 0;
      }
      product = { ...product, count: product.count + 1 };
      products[id] = product;
      state.count++;
    },

    decrementProductCount(state, action) {
      var { payload: id } = action;
      var product = state.products[id];
      if (product.count == 1) {
        delete state.products[id];
        state.count--;
      } else {
        if (!product.count) {
          product.count = 0;
        }
        product = { ...product, count: product.count - 1 };
        state.products[id] = product;
        state.count--;
      }
    },
  },
  extraReducers: {
    [fetchProductsByIds.pending.type]: (state, action) => {
      if (!state.loading) {
        state.loading = true;
        state.requestId = action.meta.requestId;
      }
    },
    [fetchProductsByIds.fulfilled.type]: (state, action) => {
      if (state.loading && state.requestId == action.meta.requestId) {
        state.loading = false;
        state.requestId = undefined;
        state.error = "";
        let products: CartProducts = {};
        for (let product of action.payload) {
          let { id } = product;
          products[id] = { ...state.products[id], ...product };
        }
        state.products = products;
      }
    },
    [fetchProductsByIds.rejected.type]: (state, action) => {
      if (state.loading && state.requestId == action.meta.requestId) {
        state.loading = false;
        state.requestId = undefined;
        state.error = action.error.message;
      }
    },
  },
});

export { fetchProductsByIds };
export default cartSlice;
