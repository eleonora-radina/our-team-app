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
    }
  }
})

export const { addUsers, addMoreUsers } = usersSlice.actions;
export default usersSlice.reducer;