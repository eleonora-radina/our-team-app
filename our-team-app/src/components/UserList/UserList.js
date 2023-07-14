import './userList.css';
import UserCard from '../UserCard/UserCard';

function UserList(props) {

  return (
    <ul className="user-list">
      {props.users.map((user => {
        return <UserCard
          key={user.id}
          id={user.id}
          firstName={user.first_name}
          lastName={user.last_name}
          avatar={user.avatar}
        />
      }))}
    </ul>
  )
}

export default UserList;