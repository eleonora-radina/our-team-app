import { createSlice } from "@reduxjs/toolkit";

const initialState = {"users": []};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, { payload }) => {
      state.users = payload;
    },
    addMoreUsers: (state, { payload }) => {
      state.users.push(...payload);
    },
    clearUsers: ((state) => {
      state.users = [];
    })
  }
})

export const { addUsers, addMoreUsers, clearUsers } = usersSlice.actions;
export default usersSlice.reducer;