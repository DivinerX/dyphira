import { useAuth } from '@/contexts/auth.hook';
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { loggedIn } = useAuth();
  console.log(loggedIn)

  return loggedIn ? (
    <>
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;