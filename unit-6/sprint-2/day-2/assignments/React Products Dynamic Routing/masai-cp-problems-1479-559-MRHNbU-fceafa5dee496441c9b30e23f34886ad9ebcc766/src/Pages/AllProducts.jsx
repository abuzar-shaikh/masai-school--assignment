import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllProducts() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    productdata();
  }, []);
  const productdata = () => {
    fetch(`http://localhost:8080/products`)
      .then((res) => res.json())
      .then((json) => setdata(json));
  };
  console.log(data);
  return (
    <div>
      <div>All Products</div>
      <div data-testid="products-wrapper">
        {data.map((item, index) => {
          return (
            <Link to={`/products/${item.id}`}>
              <div>
                <h1 data-testid="product_name">{item.name}</h1>
                <h1 data-testid="product_price">{item.price}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
