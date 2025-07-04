import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  username: "",
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    isLoggedIn: false,
  },
  reducers: {
    loadTask: (state) => {
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const loginStatus =
        JSON.parse(localStorage.getItem("isLoggedIn")) || false;
      state.tasks = storedTasks;
      state.isLoggedIn = loginStatus;
    },

    loadTask: (state) => {
      const saved = JSON.parse(localStorage.getItem("tasks")) || [];
      state.tasks = saved;
      const loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
      state.isLoggedIn = loginStatus || false;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
      localStorage.setItem("isLoggedIn", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
    },
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), ...action.payload });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { setLoggedIn, loadTask, logout, addTask } = taskSlice.actions;
export default taskSlice.reducer;
