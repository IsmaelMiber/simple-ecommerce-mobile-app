import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import catsApi from "../../API/categories";
import { CategoriesState } from "../../interfaces";

const fetchCats = createAsyncThunk(
  "categories/requestStatus",
  async (args, thunkApi) => {
    try {
      const response = await catsApi.fetchCats();
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response);
    }
  }
);

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  requestId: undefined,
  error: "",
};

const catsSlice = createSlice({
  initialState,
  name: "categories",
  reducers: {},
  extraReducers: {
    [fetchCats.pending.type]: (state, action) => {
      if (!state.loading) {
        state.loading = true;
        state.requestId = action.meta.requestId;
      }
    },
    [fetchCats.fulfilled.type]: (state, action) => {
      if (state.loading && state.requestId == action.meta.requestId) {
        state.loading = false;
        state.requestId = undefined;
        state.error = "";
        state.categories = action.payload;
      }
    },
    [fetchCats.rejected.type]: (state, action) => {
      if (state.loading && state.requestId == action.meta.requestId) {
        state.loading = false;
        state.requestId = undefined;
        state.error = action.error.message;
      }
    },
  },
});

export default catsSlice;
export { fetchCats };
