import React from "react";
import Login from "./Components/Login";
import { Dashboard } from "./Components/Dashboard";
import { AuthContext } from "./Context/AuthContextProvider";
import { useContext } from "react";

export default function App() {
  const { isloggedin } = useContext(AuthContext);
  console.log(isloggedin.loading);
  return <div>{isloggedin.loading ? <Login />: <Dashboard /> }</div>;
}
