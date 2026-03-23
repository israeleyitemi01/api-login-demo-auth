import { useAuth } from '../AuthContext';

export default function Dashboard() {
  const { auth, logout } = useAuth();
  return (
    <div>
      <h2>Hello, {auth.user.email}</h2>
      <h4>Role: {auth.user.role}</h4>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
