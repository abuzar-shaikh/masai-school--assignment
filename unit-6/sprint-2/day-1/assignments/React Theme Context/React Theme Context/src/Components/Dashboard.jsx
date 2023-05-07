import React, { useEffect } from "react";
import { useState } from "react";
import User from "./User";
import data from "../db.json";

export const Dashboard = () => {
  const [mainstyle, setmainstyle] = useState();
  const [dbsetate, setdbsetate] = useState(data);

  //   console.log(dbsetate);


  const changethem = (e) => {
    if (e.target.value === "Light Theme") {
      setmainstyle({ backgroundColor: "white", color: "black" });
      console.log(mainstyle);
    } else {
      setmainstyle({ backgroundColor: "black", color: "white" });
      console.log(mainstyle);
    }
    console.log(e.target.value)
  };

  return (
    <div data-testid="dashboard-cont" style={mainstyle}>
      <select data-testid="select-theme" onChange={changethem}>
        <option >Light Theme</option>
        <option >Dark Theme</option>
      </select>
      <h1>All Active Users</h1>
      {
        /* map through the users and render User component */

        dbsetate.map((item, index) => {
          return (
            <div key={index}>
              <User item={item} />
            </div>
          );
        })
      }
    </div>
  );
};
