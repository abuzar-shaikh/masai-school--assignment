import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [dbData, setdbData] = useState([]);
  const [sortvalue, setsortvalue] = useState("");
  const [filtervalue, setfiltervalue] = useState("");

  useEffect(() => {
    getdata();
  }, [sortvalue, filtervalue]);

  const getdata = async () => {
    let url = `http://localhost:8080/movies`;

    // sorting code

    if (sortvalue === "Oldest first") {
      url += "?_sort=year&_order=asc";
    } else if (sortvalue === "Newest first") {
      url += "?_sort=year&_order=desc";
    }

    // filer code

    if (filtervalue === "movie") {
      sortvalue ? (url += `&type=movie`) : (url += `?type=movie`);
    } else if (filtervalue === "series") {
      sortvalue ? (url += `&type=series`) : (url += `?type=series`);
    } else if (filtervalue === "game") {
      sortvalue ? (url += `&type=game`) : (url += `?type=game`);
    }

    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    setdbData(data);
    // console.log(dbData);
  };

  const HandalSort = (e) => {
    setsortvalue(e.target.value);
  };

  const handaleFilter = (e) => {
    setfiltervalue(e.target.value);
  };

  return (
    <div data-testid="movie-list">
      <h1>Movies List</h1>
      <div>
        <label>Sort By Year</label>
        <select data-testid="sort" onChange={HandalSort}>
          <option>--</option>
          <option>Oldest first</option>
          <option>Newest first</option>
        </select>
      </div>
      <div>
        <label>Filter By Type</label>
        <select data-testid="filter" onChange={handaleFilter}>
          <option>--</option>
          <option>movie</option>
          <option>series</option>
          <option>game</option>
        </select>
      </div>
      <div
        data-testid="movie-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px",
          margin: "20px",
          padding: "20px",
        }}
      >
        {
          /* render all the movies data with the help of MovieCard component here */

          dbData.length &&
            dbData.map((item, index) => {
              return (
                <div
                  style={{ boxShadow: "0 0 10px black", padding: "20px" }}
                  key={index}
                >
                  <MovieCard item={item} />
                </div>
              );
            })
        }
      </div>
    </div>
  );
};

export default MovieList;
