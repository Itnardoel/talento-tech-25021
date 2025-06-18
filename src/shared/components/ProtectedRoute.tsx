import { Navigate, Outlet } from "react-router";

import { useUser } from "@/features/user/hooks/use-user";

interface ProtectedRouteProps {
  allowedRole?: string;
}

const ProtectedRoute = ({ allowedRole }: ProtectedRouteProps) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/user" replace />;
  }

  if (allowedRole && !user.includes(allowedRole)) {
    return <Navigate to="/user" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
