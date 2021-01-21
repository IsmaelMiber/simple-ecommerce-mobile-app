import { configureStore } from "@reduxjs/toolkit";
import catsSlice from "./categories/getCats";
import catProductsSlice from "./categories/getCatProducts";
import productSlice from "./products/getProduct";
import cartSlice from "./cart";
import addressesSlice from "./addresses";
import connectionSlice from "./connection";
import localizationSlice from "./Localization";

const store = configureStore({
  reducer: {
    categories: catsSlice.reducer,
    catProducts: catProductsSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    addresses: addressesSlice.reducer,
    connection: connectionSlice.reducer,
    localization: localizationSlice.reducer,
  },
  devTools: __DEV__,
});

export default store;
