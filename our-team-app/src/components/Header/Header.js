import './header.css';

function Header() {

  return (
    <header className='header'>
      <button className='header__button' type="button">Выход</button>
      <button className='header__mobileButton' type="button" />
      <h1 className='header__title'>Наша команда</h1>
      <p className='header__text'>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>
    </header>
  )
}

export default Header;
