import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setdata] = useState([]);
  const [query, setquery] = useState();
  useEffect(() => {
   const debounce=setTimeout(()=>{
    if(query){
      axios
      .get(
        `http://localhost:8080/movies?q=${query}`
      )
      .then((res) => setdata(res.data));
    }
   
   },1000);
   return()=>clearTimeout(debounce)
  }, [query]);
 
console.log(data)
  return (
 <div>
      <input
        style={{ padding: "5px", margin: "10px", width: 200 }}
        type="text"
        data-testid="search_key"
        placeholder="Search Movie Username"
        onChange={(e) => setquery(e.target.value)}
      />
      <div data-testid="movie_results">
        {/* Add movie results based of search key here */}
      {data.map((elem,index)=>{
        return(<div key={index}>
          <h1>Title:{elem.title}</h1>
          <h1>Year:{elem.year}</h1>
        </div>
        )
      })}
      </div>
      </div>
  );
}
