import React from "react";
import style  from "../Pages/Button.module.css"
import { useState, useEffect } from "react";

export default function Products() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    productData();
  }, []);
  const productData = () => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
    )
      .then((res) => res.json())
      .then((json) => setstate(json));
  };
  console.log(state.data);
  return (
    <div>
      <h1>All Products</h1>
      <div className="products-wrapper" id={style.mainBox}>
        {state.data?.map((item) => {
          return (
            <div className={style.box}>
              <div className="id"> {item.id}</div>
              <h3 className="title">{item.title} </h3>
              <div className="category"> {item.category}</div>
              <div className="price"> {item.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
