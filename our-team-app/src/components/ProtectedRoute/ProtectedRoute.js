import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const ProtectedRoute = (props) => {
  const user = useSelector(state => state.user);

  return (
    user.isLoggedIn === true ? props.children : <Navigate to="/register" />
  );
};

export default ProtectedRoute; 