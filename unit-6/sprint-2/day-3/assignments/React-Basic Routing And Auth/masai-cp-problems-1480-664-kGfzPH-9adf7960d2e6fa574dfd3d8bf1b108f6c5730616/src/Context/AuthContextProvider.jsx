import React, { createContext, useState } from "react";
export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [isAuth, setisAuth] = useState(false);
  const [token, settoken] = useState("");
  const login = (tok) => {
    setisAuth(true);
    settoken(tok);
  };

  const logout = () => {
    setisAuth(false);
  };
  return <AuthContext.Provider value={{token, login, logout, isAuth}}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;
