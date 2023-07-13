import './userList.css';
import UserCard from '../UserCard/UserCard';

function UserList(props) {

  return(
    <div className="userList">
    <ul className="userList__zone">
    {props.users.map((user => {
        return <UserCard
          key = {user.id}
          id = {user.id}
          firstName = {user.first_name}
          lastName = {user.last_name}
          avatar = {user.avatar}
        />
      }))} 
    </ul>
  </div>
  )
}

export default UserList;