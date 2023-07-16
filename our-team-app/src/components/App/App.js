import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import './App.css';
import Register from '../Register/Register';
import TeamPage from '../TeamPage/TeamPage';
import UserPage from '../UserPage/UserPage';
import PageNotFound from '../NotFoundPage/NotFoundPage';
import api from '../../utils/api';

import { useDispatch, useSelector } from 'react-redux';
import { addUsers } from '../../store/users/users.slice'
import { logInUser, logOutUser, checkLogIn } from '../../store/user/user.slice'

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  console.log(user);
  
  function getUsers() {
    api.getUsers()
      .then((users) => {
        dispatch(addUsers(users.data));
      })
      .catch((err) => { console.log(err); });
  }

  const getUserInfo = async (id) => {
    let user = {};
    try {
      user = await api.getUser(id);
    } catch (err) {
      console.log(err);
    } finally { return user; }
  }

  function handleRegister(item) {
    api.register(item)
      .then((data) => {
        dispatch(logInUser({id: data.id, name: item.name, email: item.email, token: data.token}));
        navigate("/");
      })
      .catch((error) => { console.log(error); })
  }

  function handleExit() {
    dispatch(logOutUser());
    navigate("/register");
  }

  useEffect(() => {
    dispatch(checkLogIn());
    if (user.isLoggedIn === true) {
      getUsers()
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <TeamPage
                handleExit={handleExit}
              />
            </ProtectedRoute>}
        />

        <Route
          path="/user/:id"
          element={
            <ProtectedRoute >
              <UserPage
                getUser={getUserInfo}
                handleExit={handleExit}
              />
            </ProtectedRoute>}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
