import './userCard.css';
import face from '../../images/1.jpg';

function UserCard () {

  return(
    <li className='userCard' /* key={props.id} */>
      <div className='userCard__description'>
        <img className="userCard__image" src={face} alt='лицо артура' />
        <h2 className='userCard__title'>Артур Королев</h2>
      </div>
      {/* <button className={buttonClassName} type="button" aria-label="Лайк" onClick={handleCardLike}></button> */}
    </li>
  )
}

export default UserCard;
