import { Link } from 'react-router-dom';

import './userCard.css';

function UserCard (props) {

  return(
    <li className='userCard' key={props.id} >
      <Link className='userCard__link' to={`/user/${props.id}`}>
      <div className='userCard__description'>
        <img className="userCard__image" src={props.avatar} alt={`${props.firstName} ${props.lastName}'s avatar`} />
        <h2 className='userCard__title'>{`${props.firstName} ${props.lastName}`}</h2>
      </div>
      {/* <button className={buttonClassName} type="button" aria-label="Лайк" onClick={handleCardLike}></button> */}
      </Link>
    </li>
  )
}

export default UserCard;
