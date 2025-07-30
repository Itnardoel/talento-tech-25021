import { Navigate, Outlet } from "react-router";

import { useAuth0User } from "@/features/user/hooks/use-auth0-user";

interface ProtectedRouteProps {
  allowedRole?: string;
  fallback: React.ReactNode;
}

const ProtectedRoute = ({ allowedRole, fallback }: ProtectedRouteProps) => {
  const { user, isAdmin, isLoading } = useAuth0User();

  if (isLoading) return fallback;

  if (!user) {
    return <Navigate to="/user" replace />;
  }

  if (allowedRole && !isAdmin) {
    return <Navigate to="/user" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
