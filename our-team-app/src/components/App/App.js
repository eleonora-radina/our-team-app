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
    setLoggedIn(false);
    navigate("/register");
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    api.getUsers()
      .then((users) => {
        setUsers(users.data);
      })
      .catch((err) => { console.log(err); });
  }, []);

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
        <Route path="/register" element={<Register onRegister={handleRegister} loggedIn={loggedIn} />} />
        <Route
          loggedIn={loggedIn}
          path="/"
          element={
            <ProtectedRoute loggedIn={loggedIn} >
              <TeamPage
                users={users}
                handleExit={handleExit}
              />
            </ProtectedRoute>}
        />

        <Route
          loggedIn={loggedIn}
          path="/user/:id"
          element={
            <ProtectedRoute loggedIn={loggedIn} >
              <UserPage
                users={users}
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
