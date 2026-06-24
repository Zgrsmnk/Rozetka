import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = products.actions;
export default products.reducer;