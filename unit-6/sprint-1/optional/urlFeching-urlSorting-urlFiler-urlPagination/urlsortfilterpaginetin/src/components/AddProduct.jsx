import React from "react";
import { useEffect, useState } from "react";
const initialState = {
  title: "",
  price: "",
  category: "",
  image: "",
};
function Addproduct() {
const [inputvalue, setinputvalue] = useState(initialState);


  const handalsubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(inputvalue),
    };
    const res = await fetch("http://localhost:8080/products", requestOptions);
    const data = await res.json();
    console.log(data);
    
  };
  const hadelChange = (e) => {
    // console.log(e);
    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1> ABUZAR STORE</h1>
      <form onSubmit={handalsubmit}>
        <input name="title" placeholder="title" onChange={hadelChange}></input>
        <input name="price" placeholder="price" onChange={hadelChange}></input>
        <input
          name="category"
          placeholder="category"
          onChange={hadelChange}
        ></input>
        <input name="image" placeholder="image" onChange={hadelChange}></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default Addproduct;
