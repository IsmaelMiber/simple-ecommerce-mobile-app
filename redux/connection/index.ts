import { createSlice } from "@reduxjs/toolkit";
import { Connection } from "../../interfaces";

const initialState: Connection = {
  isToggled: false,
};

const connectionSlice = createSlice({
  initialState,
  name: "connection",
  reducers: {
    setConnectionToggled: (state, action) => {
      state.isToggled = action.payload;
    },
  },
});

export default connectionSlice;
