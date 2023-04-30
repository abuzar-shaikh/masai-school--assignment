// import React, { useEffect, useState } from "react";
import { useState, useEffect } from "react";
import CofeeCard from "../component/CofeeCard";
import st from "../pages/Cofee.module.css";

const Cofee = () => {
  // get coffee data from json server use useEffect and useState
  const [cofeedata, setcofeedata] = useState([]);

  useEffect(() => {
    getCofeeData();
  }, []);

  const getCofeeData = async () => {
    const res = await fetch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/coffee`
    );
    const data = await res.json();
    // console.log(data);
    setcofeedata(data);
    // console.log(cofeedata);
  };

  return (
    <div className="coffee_container">
      {
        /* map coffee into coffee card */

        cofeedata.map((elem, index) => {
          return <CofeeCard key={index} elem={elem} />;
        })
      }
    </div>
  );
};

export default Cofee;
