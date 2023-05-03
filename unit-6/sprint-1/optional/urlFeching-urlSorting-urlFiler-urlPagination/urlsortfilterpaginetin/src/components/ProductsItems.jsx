import React from "react";
import Productcard from "./ProductCard";
import { useEffect, useState } from "react";

function Productsitems() {
  const [initaldata, setinitaldata] = useState([]);
  const [sortvalue, setsortvalue] = useState("");
  const [filervalue, setfiltervalue] = useState("");
  const [page, setpage] = useState(1);

  useEffect(() => {
    getData();
  }, [sortvalue, filervalue, page]);

  const getData = async () => {
    let url = `http://localhost:8080/products?_page=${page}&_limit=6`;

    if (sortvalue === "asc") {
      url += "&_sort=price&_order=asc";
    } else if (sortvalue === "desc") {
      url += "&_sort=price&_order=desc";
    }

    if (filervalue === "men's clothing") {
      sortvalue
        ? (url += `&category=${filervalue}`)
        : (url += `&category=${filervalue}`);
    } else if (filervalue === "jewelery") {
      sortvalue
        ? (url += `&category=${filervalue}`)
        : (url += `&category=${filervalue}`);
    } else if (filervalue === "electronics") {
      sortvalue
        ? (url += `&category=${filervalue}`)
        : (url += `&category=${filervalue}`);
    } else if (filervalue === "women's clothing") {
      sortvalue
        ? (url += `&category=${filervalue}`)
        : (url += `&category=${filervalue}`);
    }

    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setinitaldata(data);
  };
  const handalSort = (e) => {
    setsortvalue(e.target.value);
  };
  console.log(sortvalue);

  const handaleFilter = (e) => {
    setfiltervalue(e.target.value);
  };
  const changePage = (value) => {
    setpage(page + value);
  };

  return (
    <div>
      <h1>Sorting</h1>
      <select onChange={handalSort}>
        <option>--</option>
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>

      <br />
      <br />
      <br />
      <h1>Filtering</h1>
      <select onChange={handaleFilter}>
        <option>--</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
      </select>

      <div>
        <h1>All Products</h1>
        <div>
          <button
            onClick={() => {
              changePage(-1);
            }}
            disabled={page === 1}
          >
            Previous
          </button>
          <button>{page}</button>
          <button
            onClick={() => {
              changePage(+1);
            }}
            disabled={page === 6}
          >
            Next
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            margin: "20px",
            padding: "20px",
          }}
        >
          {initaldata.length &&
            initaldata.map((item, index) => {
              return (
                <div
                  style={{ boxShadow: "0 0 10px black", padding: "30px" }}
                  key={index}
                >
                  <Productcard item={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default Productsitems;
