import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Loader } from "../Components/Loader";
import { Link } from "react-router-dom";
import { RoomsContainer } from "../Components/RoomsContainer";

export const Dashboard = () => {
  const { authstate, logoutUser } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const handleLogout = () => {
    logoutUser();
  };
  useEffect(() => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/rooms`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data.name);
  return (
    <div data-testid="dashboard-component">
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>
          Logout
        </button>
        <p>
          Token:
          {/* The token should be displayed below */}
          <b data-testid="user-token">{authstate.token}</b>
        </p>
      </div>
      <div data-testid="room-container">
        {/* Either Loader or RoomsContainer should exist below */}
        {data.length ? <RoomsContainer data={data} /> : <Loader />}
      </div>
    </div>
  );
};
