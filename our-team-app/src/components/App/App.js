import { Route, Routes } from 'react-router-dom';

import './App.css';
import '../Register/Register'
import Register from '../Register/Register';
import TeamPage from '../TeamPage/TeamPage';
import UserPage from '../UserPage/UserPage';
import PageNotFound from '../NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TeamPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<UserPage />} />   
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;
