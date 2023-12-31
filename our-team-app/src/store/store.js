import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/users.slice';
import userReducer from './user/user.slice';
import favouritesReducer from './favourites/favourites.slice';


export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
    favourites: favouritesReducer,
  }
})