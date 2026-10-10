import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function ProtectedCheckout() {
  const { user } = useAuth();
  const location = useLocation()

  if (!user) {
    return <Navigate 
    to="/login"
    state={{ from: location.pathname }} 
    replace />;
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export default ProtectedCheckout