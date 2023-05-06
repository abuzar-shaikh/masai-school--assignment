import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export const Dashboard = () => {
  const { setisloggedin } = useContext(AuthContext);
  //   console.log(isloggedin.isAuth);
  return (
    <div>
      <h3 data-testid="token">Token: </h3>
      <button
        data-testid="logout"
        onClick={() => {
          setisloggedin({loading:true});
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};
