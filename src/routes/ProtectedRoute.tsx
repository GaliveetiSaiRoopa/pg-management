import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const token = localStorage.getItem("user-token");
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
