import { Navigate, Outlet } from "react-router";

import { useUser } from "@/hooks/use-user";

const ProtectedRoute = () => {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
