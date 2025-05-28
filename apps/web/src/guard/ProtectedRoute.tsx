import { Navigate } from "react-router";
import Guard from "./Guard";
import { toast } from "react-toastify";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = Guard.isAuthenticated();

  if (!isAuthenticated) {
    toast.error("You need to be logged in to access this page.");
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}
