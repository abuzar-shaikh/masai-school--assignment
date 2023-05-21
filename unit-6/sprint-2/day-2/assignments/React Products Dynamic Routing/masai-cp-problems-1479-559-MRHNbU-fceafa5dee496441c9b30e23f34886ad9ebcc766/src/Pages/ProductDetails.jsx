import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetails() {
  const [state, setstate] = useState({
    name: "",
    price: "",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setstate(data);
      });
  }, []);
  return (
    <div data-testid="product-details">
      <div>
   
        <h1 data-testid = "product_name">{state.name}</h1>
        <h1  data-testid ="product_price">{state.price}</h1>
      </div>
    </div>
  );
}
