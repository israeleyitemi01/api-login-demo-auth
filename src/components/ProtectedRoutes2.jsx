import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const ProtectedRoute = ({ children, roles }) => {
  const { auth } = useAuth();

  if (!auth.token) return <Navigate to="/login" />;
  if (roles && !roles.includes(auth.user.role)) return <h1>403 - Access Denied</h1>;

  return children;
};

export default ProtectedRoute;


