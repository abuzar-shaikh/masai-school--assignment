import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";

const App = () => {
  const [toggle, settoggle] = useState(true);
  return (
    <div className="App">
      <div>
        <h1>React Movies List</h1>
        {/* The below button should have text content as either `Show Movies`or `Add Movie` */}
        <button
          data-testid="toggle-btn"
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          {toggle ? "AddMovie" : "MovieList "}
        </button>
      </div>
      <div data-testid="container">
        {
          /* Add the required components here either AddMovie or MovieList will exist on DOM at a time*/
          toggle ? <MovieList /> : <AddMovie />
        }
      </div>
    </div>
  );
};

export default App;
