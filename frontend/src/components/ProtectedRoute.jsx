import { Navigate } from "react-router-dom";
import { useAuth } from "../api/authContext";
import Loader from "../components/Loader/Loader";

export default function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, user, isLoading } = useAuth();
  console.log({ isAuthenticated, user, isLoading }, requiredRole);

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}
