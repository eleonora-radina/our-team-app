import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './userPage.css';
import Header from '../Header/Header';

function UserPage(props) {

  let { id } = useParams();
  const [currentUser, setCurrentUser] = useState({});

  async function getUserPage(id) {
    const userPage = await props.getUser(id);
    setCurrentUser(userPage.data);
  }

  useEffect(() => {
    getUserPage(id);
  }, [])

  return (
    <div>
      <Header hasBackButton handleExit={props.handleExit}>
        <div className='header__user-info'>
          <img className='header__image' src={currentUser?.avatar} alt={`${currentUser?.first_name} ${currentUser?.last_name}'s avatar`} />
          <div className='header__name'>
            <h1 className='header__title'>{`${currentUser?.first_name} ${currentUser?.last_name}`}</h1>
            <p className='header__subtitle'>Партнер</p>
          </div>
        </div>
      </Header>

      <div className='user__about'>
        <p className='user__text'>
          Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.
          <br /><br />
          В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
          <br /><br />
          Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.
        </p>

        <ul className='user__data'>
          <li className='user__text user__text_phone'>+7 (954) 333-44-55</li>
          <li className='user__text user__text_mail'>{currentUser?.email}</li>
        </ul>
      </div>
    </div>
  )
}

export default UserPage;
