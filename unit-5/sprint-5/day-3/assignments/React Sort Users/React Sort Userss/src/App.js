import { useState } from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";
import data from "./db.json";
// import data from db.json

function App() {
  const [names, setnames] = useState(data);
  let sortAsc = () => {
    const sortArray = [...names].sort((a, b) =>
      // a.first_name.localeCompare(b.first_name)
      a.first_name > b.first_name ? 1 : -1
    );
    setnames(sortArray);
  };

  let SortDesc = () => {
    const sortArray = [...names].sort((a, b) =>
      // b.first_name.localeCompare(a.first_name)
      b.first_name > a.first_name ? 1 : -1
    );
    setnames(sortArray);
  };

  return (
    <div className="App" data-testid="app">
      <button data-testid="sort-asc-btn" onClick={sortAsc}>
        Sort by Asc
      </button>
      <button data-testid="sort-desc-btn" onClick={SortDesc}>
        Sort by Desc
      </button>
      {
        /*  map through the users data and pass props to the Userdetails component */
        names.map((elem, index) => (
          <UserDetails key={index + 1} elem={elem} />
        ))
      }
    </div>
  );
}

export default App;
