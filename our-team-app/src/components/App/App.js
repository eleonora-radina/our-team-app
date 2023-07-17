import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addUsers, addMoreUsers, clearUsers } from '../../store/users/users.slice'
import { logInUser, logOutUser } from '../../store/user/user.slice'
import { clearFavourites } from '../../store/favourites/favourites.slice'

import Register from '../Register/Register';
import TeamPage from '../TeamPage/TeamPage';
import UserPage from '../UserPage/UserPage';
import PageNotFound from '../NotFoundPage/NotFoundPage';
import api from '../../utils/api';


function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  const [counter, setCounter] = useState(1);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    if (user.isLoggedIn === true) {
      getUsers();
      setCounter(2)
    }
  }, [user]);

  function getUsers() {
    api.getUsers(1)
      .then((users) => {
        dispatch(addUsers(users.data));
      })
      .catch((err) => { console.log(err); });
  }

  function getMoreUsers() {
    api.getUsers(counter)
      .then((users) => {
        dispatch(addMoreUsers(users.data));
        if (users.total_pages > counter) {
          setCounter(counter + 1)
        } else if (users.total_pages === counter) {
          setIsButtonVisible(false);
        }
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
        dispatch(logInUser({ id: data.id, name: item.name, email: item.email, token: data.token }));
        navigate("/");
      })
      .catch((error) => { console.log(error); })
  }

  function handleExit() {
    setCounter(1);
    setIsButtonVisible(true);
    dispatch(logOutUser());
    dispatch(clearFavourites());
    dispatch(clearUsers());
    navigate("/register");
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
                handleExit={handleExit}
                getMoreUsers={getMoreUsers}
                isButtonVisible={isButtonVisible}
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
