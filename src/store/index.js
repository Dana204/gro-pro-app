import { configureStore } from "@reduxjs/toolkit";

import cartSlice from './cart-slice';
import uiSlice from './ui-slice';
// import favSlice from './fav-slice';

const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer }
    // reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer, fav: favSlice.reducer }
})

export default store;