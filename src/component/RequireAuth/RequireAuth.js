import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";

const RequireAuth = () => {
  let auth = useAuth();
  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
