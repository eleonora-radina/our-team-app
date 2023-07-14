import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  let isAuth = localStorage.getItem('token') ? true : false;
  return (
    isAuth ? props.children : <Navigate to="/register" />
  );
};

export default ProtectedRoute; 