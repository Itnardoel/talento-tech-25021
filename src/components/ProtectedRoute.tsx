import { useUser } from "@/hooks/use-user";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
