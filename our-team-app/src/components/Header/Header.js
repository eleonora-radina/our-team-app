import { Link } from 'react-router-dom';
import './header.css';

function Header(props) {

  return (
    <header className={`header ${props.hasBackButton ? 'header_user' : 'header_team'}`}>
      
      {props.hasBackButton && <Link className='header__button' to="/">Назад</Link>}
      {props.hasBackButton && <Link className='header__mobileReturnButton' to="/" /> }

      {props.children}

      <Link className='header__button header__button_exit' to="/register">Выход</Link>
      <Link className='header__mobileExitButton' to="/register" />
    </header>
  )
}

export default Header;
