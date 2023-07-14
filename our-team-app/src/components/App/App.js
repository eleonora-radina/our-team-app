import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import './App.css';
import '../Register/Register'
import Register from '../Register/Register';
import TeamPage from '../TeamPage/TeamPage';
import UserPage from '../UserPage/UserPage';
import PageNotFound from '../NotFoundPage/NotFoundPage';
import api from '../../utils/api';

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  function handleRegister(data) {
    api.register(data)
      .then((data) => {
        setLoggedIn(true);
        localStorage.setItem('token', data.token);
        navigate("/");
      })
      .catch((error) => { console.log(error); })
  }

  function handleExit() {
    localStorage.removeItem('token');
    navigate("/register");
  }

  useEffect(() => {
    let isAuth = localStorage.getItem('token') ? true : false;
    setLoggedIn(isAuth);

    if (loggedIn === true) {
      api.getUsers()
        .then((users) => {
          setUsers(users.data);
        })
        .catch((err) => { console.log(err); });
    }
  }, [loggedIn]);

  const getUserInfo = async (id) => {
    let user = [];
    try {
      user = await api.getUser(id);
    } catch (err) {
      console.log(err);
    } finally { return user; }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <TeamPage
                users={users}
                handleExit={handleExit}
              />
            </ProtectedRoute>}
        />

        <Route
          path="/user/:id"
          element={
            <ProtectedRoute>
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
