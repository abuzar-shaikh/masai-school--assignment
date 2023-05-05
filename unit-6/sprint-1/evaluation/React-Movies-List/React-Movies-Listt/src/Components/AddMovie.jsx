import React, { useState } from "react";

const initialState = {
  title: "",
  year: "",
  imdbID: "",
  type: "",
  rating: "",
  poster: "",
};

const AddMovie = () => {
  const [inputvalue, setinputvalue] = useState(initialState);

  const handalsubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(inputvalue),
    };
    const res = await fetch("http://localhost:8080/movies", requestOptions);
    const data = await res.json();
    console.log(data);
  };

  const hadelChange = (e) => {
    console.log(e);
    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value });
  };
  return (
    <div
      data-testid="add-movie"
      style={{
        boxShadow: "0 0 10px black",
        padding: "50px",
        width: "30%",
        margin: "auto",
      }}
    >
      <h1>Add Movie</h1>

      <div>
        <form data-testid="add-movie-form" onSubmit={handalsubmit}>
          title:
          <div>
            <input
              name="title"
              placeholder="title"
              onChange={hadelChange}
            ></input>
          </div>
          year:
          <div>
            <input
              name="year"
              placeholder="year"
              onChange={hadelChange}
            ></input>
          </div>
          imdbID:
          <div>
            <input
              name="imdbID"
              placeholder="imdbID"
              onChange={hadelChange}
            ></input>
          </div>
          Type:
          <div>
            <select name="type" onChange={hadelChange}>
              <option>movie</option>
              <option>series</option>
              <option>game</option>
            </select>
          </div>
          Rating:
          <div>
            <input
              name="rating"
              placeholder="rating"
              onChange={hadelChange}
            ></input>
          </div>
          poster:
          <div>
            <input
              name="poster"
              placeholder="poster"
              onChange={hadelChange}
            ></input>
          </div>
          <div>
            <button type="submit">Add Movie</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
