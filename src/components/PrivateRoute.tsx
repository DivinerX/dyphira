import { useAuth } from '@/contexts/auth.hook';
import { useEffect } from 'react';
import { Navigate } from "react-router-dom";
interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { loggedIn, getUser } = useAuth();
  useEffect(() => {
    if (loggedIn) {
      getUser();
    }
  }, [loggedIn]);

  return loggedIn ? (
    <>
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;