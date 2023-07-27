import React, { useContext ,children} from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const { authstate } = useContext(AuthContext);
  console.log(authstate.isAuth);

  if (!authstate.isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};
