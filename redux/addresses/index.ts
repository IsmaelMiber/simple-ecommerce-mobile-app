import { Addresses } from "../../interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Addresses = {
  addresses: [],
};

const addressesSlice = createSlice({
  initialState,
  name: "addresses",
  reducers: {
    addAddress(state, action) {
      var { payload } = action;
      state.addresses.push({ id: new Date().getTime(), ...payload });
    },

    deleteAddress(state, action) {
      var { addresses } = state;
      state.addresses = addresses.filter(({ id }) => id != action.payload);
    },
  },
});

export default addressesSlice;
