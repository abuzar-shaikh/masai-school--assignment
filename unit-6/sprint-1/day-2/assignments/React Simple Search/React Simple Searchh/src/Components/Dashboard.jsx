import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../Components/Dashbord.module.css";

export default function Dashboard() {
  const [state, setstate] = useState([]);
  const [inputdata, setinputdata] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(`http://localhost:8080/groceries`);
    const data = await res.json();
    // console.log(data);
    setstate(data);
    // console.log(state)
  };

  return (
    <div id={style.grocery}>
      <input
        className="search_box"
        type="text"
        placeholder="Search Groceries"
        onChange={(even) => {
          setinputdata(even.target.value);
        }}
      />
      {/* <h1>{inputdata}</h1> */}
      <div className="grocery_data" id={style.listData}>
        {/* map the below div against your grocery data */}
        {state
          .filter((elem) => {
            return inputdata.toLocaleLowerCase() === ""
              ? elem
              : elem.name.toLocaleLowerCase().includes(inputdata);
          })
          .map((elem) => (
            <div key={elem.id} className={style.abc}>
              <h3>{elem.name}</h3>
              <div>{elem.price}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
