import React, { useState } from "react";
import CoffeeCard from "../component/CoffeeCard";
import "./Coffee.css";
const Coffee = () => {
  const [coffee, setcoffee] = useState([]);

  let url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`;

  async function handleGetData() {
    let res = await fetch(`${url}/coffee`);
    let data = await res.json();
    console.log(data);
    setcoffee(data);
  }
  return (
    <div id="coffee_container-main">
      <div id="coffee_container-btn">
      <button onClick={handleGetData}>Get Coffee</button>

      </div>
      <div className="coffee_container">
        {
          /* map coffee into coffee card */

          coffee.map((ele) => (
            <CoffeeCard key={ele.id} ele={ele} />
          ))
        }
      </div>
    </div>
  );
};

export default Coffee;
