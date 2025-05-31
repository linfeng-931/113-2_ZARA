import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import colorReducer from "./colorSlice";
import favoriteReducer from "./favSlice";

//Combine Reducers and Create a Store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    color: colorReducer,
    favorites: favoriteReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
});

store.subscribe(() => {
  const { cartItems } = store.getState().cart;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
});

//export store to global
export default store;
