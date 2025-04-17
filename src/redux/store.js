import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import colorReducer from "./colorSlice";

//Combine Reducers and Create a Store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    color: colorReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
});

store.subscribe(() => {
  const { cartItems } = store.getState().cart;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
});

//export store to global
export default store;
