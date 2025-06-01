import { createSlice } from "@reduxjs/toolkit";
function loadFavoriteItems() {
  try {
    const data = localStorage.getItem("favoriteItems");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Invalid favoriteItems in localStorage:", e);
    return [];
  }
}

const initialState = {
  favoriteItems: loadFavoriteItems(),
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteItem: (state, action) => {
      const item = action.payload;
      const exists = state.favoriteItems.find((x) => x.id === item.id);
      if (!exists) {
        state.favoriteItems = [...state.favoriteItems, item];
        localStorage.setItem(
          "favoriteItems",
          JSON.stringify(state.favoriteItems)
        );
      }
    },
    removeFavoriteItem: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        (x) => x.id !== action.payload
      );
      localStorage.setItem(
        "favoriteItems",
        JSON.stringify(state.favoriteItems)
      );
    },
    clearFavoriteItems: (state) => {
      state.favoriteItems = [];
      localStorage.removeItem("favoriteItems");
    },
    setFavoriteItems: (state, action) => {
      state.favoriteItems = action.payload;
    },
  },
});

export const selectFavoriteItems = (state) => state.favorites.favoriteItems;

export const {
  addFavoriteItem,
  removeFavoriteItem,
  clearFavoriteItems,
  setFavoriteItems,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
