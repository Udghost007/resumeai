import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";

const ProtectedRoute = () => {
  const token = useAppSelector((state) => state.auth.token);

  return token || localStorage.getItem("token") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
