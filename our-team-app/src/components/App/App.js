import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import '../Register/Register'
import Register from '../Register/Register';
import TeamPage from '../TeamPage/TeamPage';
import UserPage from '../UserPage/UserPage';
import PageNotFound from '../NotFoundPage/NotFoundPage';
import api from '../../utils/api';

function App() {

  const [users, setUsers] = useState([]);

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
        <Route path="/" element={<TeamPage users={users}  />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:id" element={<UserPage getUser={getUserInfo} />} />   
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;
