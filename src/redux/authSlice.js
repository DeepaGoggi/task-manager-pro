import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  username: localStorage.getItem("username") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", action.payload);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = "";
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
    },
  },
});

export const { setLoggedIn, logout } = authSlice.actions;
export default authSlice.reducer;
