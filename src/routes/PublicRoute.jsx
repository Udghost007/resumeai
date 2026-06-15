import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";

const PublicRoute = () => {
  const token = useAppSelector((state) => state.auth.token);

  return token || localStorage.getItem("token") ? (
    <Navigate to="/resumes" replace />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
