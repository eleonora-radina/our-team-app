import { Link } from 'react-router-dom';
import './header.css';

function Header(props) {

  return (
    <header className={`header ${props.hasBackButton ? 'header_page_user' : 'header_page_team'}`}>

      {props.hasBackButton && <Link className='header__button' to="/">Назад</Link>}
      {props.hasBackButton && <Link className='header__mobile-button header__mobile-button_return' to="/" />}

      {props.children}

      <Link className='header__button header__button_exit' to="/register" onClick={props.handleExit}>Выход</Link>
      <Link className='header__mobile-button header__mobile-button_exit' to="/register" onClick={props.handleExit} />
    </header>
  )
}

export default Header;
