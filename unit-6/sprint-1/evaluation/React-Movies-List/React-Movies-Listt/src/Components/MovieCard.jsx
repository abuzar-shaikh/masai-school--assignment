import React, { useEffect, useState } from "react";

const MovieCard = ({ item }) => {
  return (
    <div data-testid="movie-card" style={{ display: "flex", gap: "30px" }}>
      <div>
        <img src={item.poster} style={{ width: "150px", height: "200px" }} />
      </div>
      <div>
        <h2>{item.title}</h2>
        <h4>Year:{item.year}</h4>
        <h6>ID:{item.imdbID}</h6>
        <p>Type:{item.type}</p>
        <p>Rating:{item.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
