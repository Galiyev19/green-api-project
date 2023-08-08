import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "Error",
  userInfo: [],
  IdInstance:
    localStorage.getItem("instance") !== null
      ? JSON.parse(localStorage.getItem("instance")).idInstance
      : "",
  ApiTokenInstance:
    localStorage.getItem("instance") !== null
      ? JSON.parse(localStorage.getItem("instance")).ApiTokenInstance
      : "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeIdInstance: (state, action) => {
      state.IdInstance = action.payload;
    },
    changeApiTokenInstance: (state, action) => {
      state.ApiTokenInstance = action.payload;
    },
  },
});

export const { changeApiTokenInstance, changeIdInstance } = userSlice.actions;
export default userSlice.reducer;
