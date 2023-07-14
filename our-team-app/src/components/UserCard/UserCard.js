import { Link } from 'react-router-dom';
import './userCard.css';

function UserCard(props) {

  return (
    <li className='user-card' key={props.id} >
      <Link className='user-card__link' to={`/user/${props.id}`}>
        <div className='user-card__description'>
          <img className="user-card__image" src={props.avatar} alt={`${props.firstName} ${props.lastName}'s avatar`} />
          <h2 className='user-card__title'>{`${props.firstName} ${props.lastName}`}</h2>
        </div>
        {/* <button className={buttonClassName} type="button" aria-label="Лайк" onClick={handleCardLike}></button> */}
      </Link>
    </li>
  )
}

export default UserCard;
