import './teamPage.css';
import Header from '../Header/Header';
import UserList from '../UserList/UserList';

function TeamPage(props) {
  
  return (
    <div>
      <Header handleExit={props.handleExit}>
        <div className='header__team-info'>
          <h1 className='header__title'>Наша команда</h1>
          <p className='header__about'>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>
        </div>
      </Header>
      <UserList />
    </div>
  )
}

export default TeamPage;
