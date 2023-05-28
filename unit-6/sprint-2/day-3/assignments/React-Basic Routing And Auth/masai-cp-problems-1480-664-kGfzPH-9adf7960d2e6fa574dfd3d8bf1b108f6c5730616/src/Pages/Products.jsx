import React from "react";
import { useState, useEffect } from "react";

export default function AllProducts() {
  const [datastate, setdatastate] = useState([]);
  useEffect(() => {
    ProductData();
  }, []);
  const ProductData = () => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
    )
      .then((res) => res.json())
      .then((json) => setdatastate(json.data));
  };
  console.log(datastate)
  return (
    <div>
      <h2>All Products</h2>
      <div className="products-wrapper">
        {datastate.map((item)=>{
          return(
            <div>
            <h3 className="name"> {item.title}</h3>
            <div className="brand">{item.brand}</div>
            <div className="price">{item.price}</div>
          </div>
          )
        })}
       
      </div>
    </div>
  );
}
