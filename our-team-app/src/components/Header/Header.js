import './header.css';

function Header(props) {

  return (
    <header className={`header ${props.hasBackButton ? 'header_user' : 'header_team'}`}>
      
      {props.hasBackButton && <button className='header__button' type="button">Назад</button>}
      {props.hasBackButton && <button className='header__mobileReturnButton' type="button" />}

      {props.children}

      <button className='header__button header__button_exit' type="button">Выход</button>
      <button className='header__mobileExitButton' type="button" />
    </header>
  )
}

export default Header;
