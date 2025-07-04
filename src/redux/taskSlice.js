import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = true;
      state.username = action.payload;

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", action.payload);
    },
    loadAuth(state) {
      const login = localStorage.getItem("isLoggedIn");
      const user = localStorage.getItem("username");

      if (login === "true") {
        state.isLoggedIn = true;
        state.username = user;
      }
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = "";
      localStorage.clear();
    },
  },
});

export const { setLoggedIn, loadAuth, logout } = authSlice.actions;
export default authSlice.reducer;
