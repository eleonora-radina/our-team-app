import { useSelector } from 'react-redux';
import './userList.css';
import UserCard from '../UserCard/UserCard';

function UserList() {
  const users = useSelector(state => state.users);

  return (
    <ul className="user-list">
      {users.users.map((user => {
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