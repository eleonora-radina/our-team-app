import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {

  return (
    localStorage.getItem('token') ? props.children : <Navigate to="/register" />
  );
};

export default ProtectedRoute; 