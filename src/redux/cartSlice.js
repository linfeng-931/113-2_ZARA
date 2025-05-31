import { createSlice } from "@reduxjs/toolkit";

// 安全解析 localStorage 資料
function loadCartItems() {
  try {
    const data = localStorage.getItem("cartItems");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Invalid cartItems in localStorage:", e);
    return [];
  }
}
//Define Slice
const initialState = {
  cartItems: loadCartItems(),
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItems: (state, action) => {
      const item = action.payload;
      const product = state.cartItems.find(
        (x) => x.id === item.id && x.id2 === item.id2
      );
      if (product) {
        const cartItems = state.cartItems.map((x) =>
          x.id === product.id && x.id2 === product.id2 ? item : x
        );
        state.cartItems = cartItems;
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },
    removeCartItems: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});

//export state to global
export const selectCartItems = (state) => state.cart.cartItems;

//export actions to global
export const { addCartItems, removeCartItems, setCartItems, clearCartItems } =
  cartSlice.actions;

//export reducer to global
export default cartSlice.reducer;
