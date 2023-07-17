import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './userCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourites } from '../../store/favourites/favourites.slice'

function UserCard(props) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isLiked, setIsLiked] = useState(false);
  const favRedux = useSelector(state => state.favourites);

  useEffect(() => {
    setIsLiked(favRedux?.includes(props.id));
  }, [favRedux, props.id])


  function handleCardLike(e) {
    e.stopPropagation()
    dispatch(toggleFavourites(props.id))
  }

  function handleCardOpen() {
    navigate(`/user/${props.id}`);
  }

  return (
    <li className='user-card' key={props.id} >
      <div className='user-card__link' onClick={handleCardOpen} >
        <div className='user-card__description'>
          <img className="user-card__image" src={props.avatar} alt={`${props.firstName} ${props.lastName}'s avatar`} />
          <h2 className='user-card__title'>{`${props.firstName} ${props.lastName}`}</h2>
        </div>

        {<button
          className={`user-card__like ${isLiked ? "user-card__like_active" : ""}`}
          type="button"
          aria-label="Лайк"
          onClick={handleCardLike} />}
      </div>
    </li>
  )
}

export default UserCard;
