import logo from '../../logo.svg';
import './App.css';
import '../Register/Register'
import Register from '../Register/Register';
import Header from '../Header/Header';
import UserList from '../UserList/UserList';

function App() {
  return (
    <div className="App">
      <Header />
      <UserList />
    </div>
  );
}

export default App;
