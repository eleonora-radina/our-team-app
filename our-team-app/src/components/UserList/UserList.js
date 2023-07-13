import './userList.css';
import UserCard from '../UserCard/UserCard';

function UserList() {

  return(
    <div className="userList">
    <ul className="userList__zone">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      {/* {props.movies.map((movie => {
        return <MoviesCard 
          key = {movie.id}
          id = {movie.id}
          movie = {movie}
          onCardLike = {props.onCardLike}
          savedMovies={props.savedMovies}
        />
      }))} */}
    </ul>
  </div>
  )
}

export default UserList;