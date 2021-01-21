import { createSlice } from "@reduxjs/toolkit";
import productsApi from "../../API/products";
import { Localization } from "../../types";

const initialState: Localization = {
  direction: "LTR",
};

const localizationSlice = createSlice({
  name: "localization",
  initialState,
  reducers: {
    toggleDirection: (state) => {
      state.direction = state.direction == "LTR" ? "RTL" : "LTR";
    },
  },
});

export default localizationSlice;
