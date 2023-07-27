import React, { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authstate, setauthstate] = useState({ isAuth: false, token: null });

  const loginUser = (token) => {
    setauthstate({ ...authstate, token: token, isAuth: true });
    console.log(authstate);
  };
  const logoutUser = () => {
    setauthstate({ ...authstate, token: "", isAuth: false });
  };
  console.log(authstate);

  let providerState = {
    authstate: authstate,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  if (window.Cypress) {
    window.store = providerState;
  }

  return (
    <AuthContext.Provider value={providerState}>
      {children}
    </AuthContext.Provider>
  );
};
