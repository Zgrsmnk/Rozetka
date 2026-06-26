import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    setAuthFromStorage: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { loginSuccess, logout, setAuthFromStorage } = authSlice.actions;
export default authSlice.reducer;
