import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/users.slice';
import userReducer from './user/user.slice';


export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer
  }
})